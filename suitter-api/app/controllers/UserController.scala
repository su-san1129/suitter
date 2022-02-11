package controllers

import domain.User
import play.api.libs.json.Json
import play.api.mvc.{Action, AnyContent, BaseController, ControllerComponents}

import javax.inject.{Inject, Singleton}

@Singleton
class UserController @Inject()(val controllerComponents: ControllerComponents) extends BaseController {

  def getUserById(id: String): Action[AnyContent] = Action { request =>
    val user = User("name", "email", "password", 123, isPrivate = true, "no-icon")
    Ok(Json.toJson(user))
  }

}
