package com.example.routes

import akka.actor.typed.ActorSystem
import akka.http.scaladsl.model.{HttpResponse, StatusCodes}
import akka.http.scaladsl.server.Directives.complete
import akka.http.scaladsl.server.{AuthenticationFailedRejection, MethodRejection, MissingCookieRejection, Rejection, RejectionHandler, ValidationRejection}

object AppRejectionHandler {
  def apply()(implicit system: ActorSystem[_]): RejectionHandler =
    RejectionHandler.newBuilder()
      .handle {
        case MissingCookieRejection(cookieName) =>
          complete(HttpResponse(StatusCodes.BadRequest, entity = "No cookies, no service!!!"))
      }
      .handle {
        case AuthenticationFailedRejection(msg, _) =>
          complete(StatusCodes.Unauthorized, "Unauthorized.")
      }
      .handle {
        case ValidationRejection(msg, _) =>
          complete(StatusCodes.InternalServerError, "That wasn't valid! " + msg)
      }
      .handleAll[MethodRejection] { methodRejections =>
        val names = methodRejections.map(_.supported.name)
        complete(StatusCodes.MethodNotAllowed, s"Can't do that! Supported: ${names mkString " or "}!")
      }
      .handleNotFound {
        complete((StatusCodes.NotFound, "Not here!"))
      }
      .handleAll[Rejection] {
        rejections => {
          system.log.error(rejections.map(_.toString).mkString)
          complete(StatusCodes.InternalServerError)
        }
      }
      .result()
}
