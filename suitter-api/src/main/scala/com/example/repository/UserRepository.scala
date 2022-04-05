package com.example.repository

import com.example.registry.User
import scalikejdbc.{WrappedResultSet, scalikejdbcSQLInterpolationImplicitDef}

final class UserRepository private extends BaseRepository[User] {
  protected def convert(rs: WrappedResultSet): User = User(
    rs.string("id"),
    rs.string("name"),
    rs.string("email"),
    rs.string("password"),
    rs.string("phone_number"),
    rs.boolean("is_private"),
    rs.string("icon"),
    rs.long("created_at"),
    rs.long("updated_at"),
  )

  override def findAll(): Seq[User] = ???

  override def findById(id: String): Option[User] = sql"SELECT * FROM users WHERE id = $id".map(convert).single().apply()

  def findByEmail(email: String): Option[User] = sql"SELECT * FROM users WHERE email = $email".map(convert).single().apply()

  override def create(user: User): User = {
    sql"INSERT INTO users VALUES (${user.id}, ${user.name}, ${user.email}, ${user.password}, ${user.phoneNumber}, ${user.isPrivate}, ${user.icon}, ${user.createdAt}, ${user.updatedAt})".update.apply()
    user
  }

  override def update(t: User): User = ???

  override def deleteById(id: String): Unit = ???
}

object UserRepository {
  val self: UserRepository = new UserRepository()

  def apply(): UserRepository = self
}
