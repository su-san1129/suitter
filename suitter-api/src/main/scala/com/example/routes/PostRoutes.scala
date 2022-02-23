package com.example.routes

import akka.actor.typed._
import akka.actor.typed.scaladsl.AskPattern._
import akka.http.scaladsl.model.StatusCodes
import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server.Route
import akka.util.Timeout
import com.example.registry.PostRegistry.{Create, GetPosts}
import com.example.registry._

import scala.concurrent.Future

class PostRoutes(postRegistry: ActorRef[PostRegistry.Command])(implicit val system: ActorSystem[_]) {

  import JsonFormats._
  import akka.http.scaladsl.marshallers.sprayjson.SprayJsonSupport._

  private implicit val timeout: Timeout = Timeout.create(system.settings.config.getDuration("my-app.routes.ask-timeout"))

  def getPosts(): Future[Posts] = postRegistry.ask(GetPosts)

  def createPost(post: Post): Future[Post] = postRegistry.ask(Create(post, _))

  val postRoutes: Route =
    pathPrefix("posts") {
      concat(
        pathEnd {
          concat(
            get {
              complete(getPosts())
            },
            post {
              entity(as[Post]) { post =>
                onSuccess(createPost(post)) { p =>
                  complete((StatusCodes.Created, p))
                }
              }
            }
          )
        })
    }
}
