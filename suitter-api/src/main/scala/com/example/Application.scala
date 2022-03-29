package com.example

import akka.actor.typed.ActorSystem
import akka.actor.typed.scaladsl.Behaviors
import akka.http.scaladsl.Http
import akka.http.scaladsl.model.HttpMethod
import akka.http.javadsl.model.HttpMethods.DELETE
import akka.http.scaladsl.server.Route
import ch.megard.akka.http.cors.javadsl.settings.CorsSettings
import com.example.config.JdbcConfig._
import com.example.registry._
import com.example.routes._

import scala.util._

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
    import akka.http.scaladsl.server.Directives.concat
    import ch.megard.akka.http.cors.scaladsl.CorsDirectives._

    val rootBehavior = Behaviors.setup[Nothing] { context =>
      implicit val system: ActorSystem[Nothing] = context.system
      val userRegistryActor = context.spawn(UserRegistry(), "UserRegistryActor")
      val postRegistryActor = context.spawn(PostRegistry(), "PostRegistryActor")
      context.watch(userRegistryActor)
      context.watch(postRegistryActor)

      val user = new UserRoutes(userRegistryActor)
      val post = new PostRoutes(postRegistryActor)

      val topLevelRoute = cors() {
        concat(
          user.userRoutes,
          post.postRoutes
        )
      }
      startHttpServer(topLevelRoute)

      Behaviors.empty
    }
    val system = ActorSystem[Nothing](rootBehavior, "AkkaHttpServer")
  }
}
