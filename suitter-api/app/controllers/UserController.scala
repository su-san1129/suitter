package controllers

import domain.User
import play.api.libs.json.Json
import play.api.mvc.{Action, AnyContent, BaseController, ControllerComponents}

import javax.inject.{Inject, Singleton}

@Singleton
class UserController @Inject()(val controllerComponents: ControllerComponents) extends BaseController {

  val userList: Seq[User] = (1 to 5).map(i => User("user-id" + i, "user-" + i, "user-" + i + "@example.com", "password", 123, isPrivate = true, "no-icon"))

  def getUsers: Action[AnyContent] = Action { request =>
    Ok(Json.toJson(userList))
  }

  def getUserById(id: String): Action[AnyContent] = Action { request =>
    val user = userList.find(u => u.id.equals(id))
    Ok(Json.toJson(user))
  }
}
