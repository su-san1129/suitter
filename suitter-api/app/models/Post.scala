package models

import play.api.libs.functional.syntax.{toFunctionalBuilderOps, unlift}
import play.api.libs.json.{Reads, Writes, __}

case class Post(
                 id: String,
                 userId: String,
                 content: String,
                 createdAt: Long,
                 updatedAt: Long
               )


object Post {
  implicit val postRead: Reads[Post] = (
    (__ \ "id").read[String] and
      (__ \ "userId").read[String] and
      (__ \ "content").read[String] and
      (__ \ "createdAt").read[Long] and
      (__ \ "updatedAt").read[Long]
    ) (Post.apply _)

  implicit val postWrite: Writes[Post] = (
    (__ \ "id").write[String] and
      (__ \ "userId").write[String] and
      (__ \ "content").write[String] and
      (__ \ "createdAt").write[Long] and
      (__ \ "updatedAt").write[Long]
    ) (unlift(Post.unapply))
}