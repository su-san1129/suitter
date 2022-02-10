package controllers

import domain.JsonReadWrite.userWrite
import domain.User
import play.api.libs.json.Json
import play.api.mvc.{BaseController, ControllerComponents}

import javax.inject.{Inject, Singleton}

@Singleton
class UserController @Inject()(val controllerComponents: ControllerComponents) extends BaseController {

  def index() = Action { request =>
    val user = User("name", "email", "password", 123, isPrivate = true, "no-icon")
    Ok(Json.toJson(user))
  }

}
