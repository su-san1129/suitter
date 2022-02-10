package domain

import play.api.libs.functional.syntax.{toFunctionalBuilderOps, unlift}
import play.api.libs.json.{JsPath, Reads, Writes}

case class User(
                 name: String,
                 email: String,
                 password: String,
                 phoneNumber: Int,
                 isPrivate: Boolean,
                 icon: String
               )

object JsonReadWrite {
  implicit val userRead: Reads[User] = (
    (JsPath \ "name").read[String] and
      (JsPath \ "email").read[String] and
      (JsPath \ "password").read[String] and
      (JsPath \ "phoneNumber").read[Int] and
      (JsPath \ "isPrivate").read[Boolean] and
      (JsPath \ "icon").read[String]) (User.apply _)

  implicit val userWrite: Writes[User] = (
    (JsPath \ "name").write[String] and
      (JsPath \ "email").write[String] and
      (JsPath \ "password").write[String] and
      (JsPath \ "phoneNumber").write[Int] and
      (JsPath \ "isPrivate").write[Boolean] and
      (JsPath \ "icon").write[String]) (unlift(User.unapply))
}