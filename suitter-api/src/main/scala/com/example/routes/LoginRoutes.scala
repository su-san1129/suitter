package com.example.routes

import akka.http.scaladsl.model.{StatusCode, StatusCodes}
import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server.Route
import com.example.config.JWTConfig

class LoginRoutes {

  def login(email: String, password: String): (StatusCode with Serializable, String) = {
    if ((email equals "user-1@example.com") && (password equals "password")) {
      val token = JWTConfig.generateToken(email)
      return (StatusCodes.OK, s"Bearer $token")
    }
    (StatusCodes.BadRequest, s"$email and $password is bad Request.")
  }

  val loginRoutes: Route =
    path("login") {
      post {
        formFields("email", "password") { (email, password) =>
          complete(login(email, password))
        }
      }
    }
}

object LoginRoutes {
  def routes = new LoginRoutes()

  def apply: Route = routes.loginRoutes
}
