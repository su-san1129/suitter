package com.example.routes

import com.example.domain.post.CreatePostRequest
import com.example.registry._
import spray.json.{DefaultJsonProtocol, RootJsonFormat}

object JsonFormats {

  import DefaultJsonProtocol._

  implicit val userJsonFormat: RootJsonFormat[User] = jsonFormat9(User)
  implicit val usersJsonFormat: RootJsonFormat[Users] = jsonFormat1(Users)

  implicit val postJsonFormat: RootJsonFormat[Post] = jsonFormat5(Post)
  implicit val createPostRequestJsonFormat: RootJsonFormat[CreatePostRequest] = jsonFormat2(CreatePostRequest)
  implicit val postResponseJsonFormat: RootJsonFormat[PostResponse] = jsonFormat6(PostResponse)
  implicit val postsJsonFormat: RootJsonFormat[Posts] = jsonFormat1(Posts)
}
