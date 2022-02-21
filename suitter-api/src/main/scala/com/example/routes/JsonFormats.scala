package com.example.routes

import com.example.registry._
import spray.json.DefaultJsonProtocol

object JsonFormats {

  import DefaultJsonProtocol._

  implicit val userJsonFormat = jsonFormat9(User)
  implicit val usersJsonFormat = jsonFormat1(Users)
}
