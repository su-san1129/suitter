package controllers

import models.{Post, User}
import play.api.libs.functional.syntax.{toFunctionalBuilderOps, unlift}
import play.api.libs.json.{Json, Writes, __}
import play.api.mvc.{Action, AnyContent, BaseController, ControllerComponents}

import javax.inject.{Inject, Singleton}

@Singleton
class PostController @Inject()(val controllerComponents: ControllerComponents) extends BaseController {
  val postList: Seq[PostResponse] = (1 to 5).map(i =>
    PostResponse(
      "post-id" + i,
      UserList.get.find(u => u.id.equals("user-id" + i)).get,
      "sample-post-" + i,
      System.currentTimeMillis(),
      System.currentTimeMillis())
  )

  def getPosts: Action[AnyContent] = Action { request =>
    Ok(Json.toJson(postList))
  }

  def getPostById(id: String): Action[AnyContent] = Action { request =>
    val post = postList.find(p => p.id.equals(id))
    Ok(Json.toJson(post))
  }

  case class PostResponse private(
                                   id: String,
                                   user: User,
                                   content: String,
                                   createdAt: Long,
                                   updatedAt: Long
                                 )

  object PostResponse {
    implicit val postResponseWrite: Writes[PostResponse] = (
      (__ \ "id").write[String] and
        (__ \ "user").write[User] and
        (__ \ "content").write[String] and
        (__ \ "createdAt").write[Long] and
        (__ \ "updatedAt").write[Long]
      ) (unlift(PostResponse.unapply))
  }

}
