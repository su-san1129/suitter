package com.example.routes

import akka.actor.typed._
import akka.actor.typed.scaladsl.AskPattern._
import akka.http.scaladsl.model.StatusCodes
import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server.Route
import akka.util.Timeout
import com.example.domain.user.CreateUserRequest
import com.example.registry.UserRegistry._
import com.example.registry._

import scala.concurrent.Future

class UserRoutes(userRegistry: ActorRef[UserRegistry.Command])(implicit
    val system: ActorSystem[_]
) {

  import JsonFormats._
  import akka.http.scaladsl.marshallers.sprayjson.SprayJsonSupport._

  private implicit val timeout: Timeout = Timeout.create(
    system.settings.config.getDuration("my-app.routes.ask-timeout")
  )

  def getUsers(): Future[Users] = userRegistry.ask(GetUsers)

  def createUser(user: User): Future[GetUserResponse] =
    userRegistry.ask(CreateUser(user, _))

  def getUser(id: String): Future[GetUserResponse] =
    userRegistry.ask(GetUser(id, _))

  val userRoutes: Route =
    pathPrefix("users") {
      concat(
        pathEnd {
          concat(
            get {
              complete(getUsers())
            }
          )
        },
        path(Segment) { id =>
          concat(
            get {
              rejectEmptyResponse {
                onSuccess(getUser(id)) { response =>
                  complete(response.maybeUser)
                }
              }
            }
          )
        }
      )
    }

  val whiteRoutes: Route = {
    concat(
      path("users") {
        post {
          entity(as[CreateUserRequest]) { request =>
            onSuccess(createUser(request.toUser())) { user =>
              complete((StatusCodes.Created, user.maybeUser))
            }
          }
        }
      }
    )
  }
}
