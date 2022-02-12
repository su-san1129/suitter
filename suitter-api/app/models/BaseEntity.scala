package models

trait BaseEntity {
  val id: String;
  val createdAt: Long;
  val updatedAt: Long;
}
