package com.example.routes

import akka.http.scaladsl.model.{StatusCode, StatusCodes}
import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server.Route
import com.example.config.{JWTConfig, PasswordEncoder}
import com.example.repository.UserRepository

class LoginRoutes {

  val passwordEncoder = PasswordEncoder()

  def login(
      email: String,
      password: String
  ): (StatusCode with Serializable, String) = {
    val repository = UserRepository()
    val maybeUser = repository.findByEmail(email)
    if (
      maybeUser.isDefined && passwordEncoder.matches(
        password,
        maybeUser.get.password
      )
    ) {
      val token = JWTConfig.generateToken(maybeUser.get)
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
