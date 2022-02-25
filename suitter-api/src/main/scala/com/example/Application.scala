package com.example

import akka.actor.typed.ActorSystem
import akka.actor.typed.scaladsl.Behaviors
import akka.http.scaladsl.Http
import akka.http.scaladsl.server.{Directives, Route}
import com.example.registry._
import com.example.routes._

import scala.util._
import config.JdbcConfig._

object Application {

  private def startHttpServer(routes: Route)(implicit system: ActorSystem[_]): Unit = {
    // Akka HTTP still needs a classic ActorSystem to start
    import system.executionContext

    val futureBinding = Http().newServerAt("localhost", 8080).bind(routes)
    initConnection()
    futureBinding.onComplete {
      case Success(binding) =>
        val address = binding.localAddress
        system.log.info("Server online at http://{}:{}/", address.getHostString, address.getPort)
      case Failure(ex) =>
        system.log.error("Failed to bind HTTP endpoint, terminating system", ex)
        system.terminate()
    }

    sys.addShutdownHook {
      close()
    }
  }

  def main(args: Array[String]): Unit = {
    val rootBehavior = Behaviors.setup[Nothing] { context =>
      implicit val system: ActorSystem[Nothing] = context.system
      val userRegistryActor = context.spawn(UserRegistry(), "UserRegistryActor")
      val postRegistryActor = context.spawn(PostRegistry(), "PostRegistryActor")
      context.watch(userRegistryActor)
      context.watch(postRegistryActor)

      val user = new UserRoutes(userRegistryActor)
      val post = new PostRoutes(postRegistryActor)
      val topLevelRoute = Directives.concat(
        user.userRoutes,
        post.postRoutes
      )
      startHttpServer(topLevelRoute)

      Behaviors.empty
    }
    val system = ActorSystem[Nothing](rootBehavior, "AkkaHttpServer")
  }
}
