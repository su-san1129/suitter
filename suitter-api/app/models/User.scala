package models

import play.api.libs.functional.syntax.{toFunctionalBuilderOps, unlift}
import play.api.libs.json.{Reads, Writes, __}

case class User(
                 id: String,
                 name: String,
                 email: String,
                 password: String,
                 phoneNumber: Int,
                 isPrivate: Boolean,
                 icon: String,
                 createdAt: Long,
                 updatedAt: Long
               ) extends BaseEntity

object User {
  implicit val userRead: Reads[User] = (
    (__ \ "id").read[String] and
      (__ \ "name").read[String] and
      (__ \ "email").read[String] and
      (__ \ "password").read[String] and
      (__ \ "phoneNumber").read[Int] and
      (__ \ "isPrivate").read[Boolean] and
      (__ \ "icon").read[String] and
      (__ \ "createdAt").read[Long] and
      (__ \ "updatedAt").read[Long]
    ) (User.apply _)

  implicit val userWrite: Writes[User] = (
    (__ \ "id").write[String] and
      (__ \ "name").write[String] and
      (__ \ "email").write[String] and
      (__ \ "password").write[String] and
      (__ \ "phoneNumber").write[Int] and
      (__ \ "isPrivate").write[Boolean] and
      (__ \ "icon").write[String] and
      (__ \ "createdAt").write[Long] and
      (__ \ "updatedAt").write[Long]
    ) (unlift(User.unapply))
}