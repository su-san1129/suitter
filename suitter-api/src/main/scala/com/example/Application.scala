package com.example

import akka.actor.typed.ActorSystem
import akka.actor.typed.scaladsl.Behaviors
import akka.http.scaladsl.Http
import akka.http.scaladsl.model.headers.{HttpChallenge, OAuth2BearerToken}
import akka.http.scaladsl.server.Directives.{authenticateOrRejectWithChallenge, handleRejections}
import akka.http.scaladsl.server._
import akka.http.scaladsl.server.directives.{AuthenticationDirective, AuthenticationResult}
import com.example.config.JWTConfig
import com.example.config.JdbcConfig._
import com.example.registry._
import com.example.routes._

import scala.concurrent.Future
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
      val postRoutes = new PostRoutes(postRegistryActor)
      val topLevelRoute =
        cors() {
          handleRejections(AppRejectionHandler()) {
            concat(
              authenticate(system) { _a =>
                concat(
                  user.userRoutes,
                  postRoutes.postRoutes,
                )
              },
              LoginRoutes.apply
            )
          }
        }
      startHttpServer(topLevelRoute)

      Behaviors.empty
    }
    val system = ActorSystem[Nothing](rootBehavior, "AkkaHttpServer")
  }

  private def authenticate(system: ActorSystem[_]): AuthenticationDirective[String] = {
    authenticateOrRejectWithChallenge[OAuth2BearerToken, String] {
      case Some(OAuth2BearerToken(token)) if JWTConfig.validate(token) =>
        Future.successful(AuthenticationResult.success("success"))
      case _ =>
        system.log.error("401: unauthorized.")
        Future.successful(AuthenticationResult.failWithChallenge(
          HttpChallenge("bearer", None, Map("error" -> "invalid_token")))
        )
    }
  }
}
