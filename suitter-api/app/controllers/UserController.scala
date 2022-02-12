package controllers

import models.User
import play.api.libs.json.Json
import play.api.mvc.{Action, AnyContent, BaseController, ControllerComponents}

import javax.inject.{Inject, Singleton}

@Singleton
class UserController @Inject()(val controllerComponents: ControllerComponents) extends BaseController {

  def getUsers: Action[AnyContent] = Action { request =>
    Ok(Json.toJson(UserList.get))
  }

  def getUserById(id: String): Action[AnyContent] = Action { request =>
    val user = UserList.get.find(u => u.id.equals(id))
    Ok(Json.toJson(user))
  }
}

object UserList {
  def get: Seq[User] = (1 to 5).map(i =>
    User(
      "user-id" + i,
      "user-" + i,
      "user-" + i + "@example.com",
      "password",
      123,
      isPrivate = true,
      "no-icon",
      System.currentTimeMillis(),
      System.currentTimeMillis())
  )
}
