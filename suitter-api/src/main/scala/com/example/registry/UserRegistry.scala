package com.example.registry

import akka.actor.typed.{ActorRef, Behavior}
import akka.actor.typed.scaladsl.Behaviors
import akka.http.scaladsl.server.AuthorizationFailedRejection
import akka.http.scaladsl.server.Directives.reject
import com.example.config.JWTConfig
import com.example.domain.BaseEntity
import com.example.registry.UserRegistry.repository
import com.example.repository.UserRepository

import scala.collection.immutable

final case class User(
    id: String,
    name: String,
    email: String,
    password: String,
    phoneNumber: String,
    isPrivate: Boolean,
    icon: String,
    createdAt: Long,
    updatedAt: Long
) extends BaseEntity

final case class Users(users: immutable.Seq[User])

object UserRegistry {
  sealed trait Command

  final case class GetUsers(replyTo: ActorRef[Users]) extends Command

  final case class GetUser(id: String, replyTo: ActorRef[GetUserResponse])
      extends Command

  final case class CreateUser(user: User, replyTo: ActorRef[GetUserResponse])
      extends Command

  final case class GetUserResponse(maybeUser: Option[User])

  val repository: UserRepository = UserRepository()

  def apply(): Behavior[Command] =
    Behaviors.receiveMessage {
      case GetUsers(replyTo) =>
        replyTo ! Users(
          (1 to 5).map(i =>
            User(
              "user-id" + i,
              "user-" + i,
              "user-" + i + "@example.com",
              "password",
              "123",
              isPrivate = true,
              "no-icon",
              System.currentTimeMillis(),
              System.currentTimeMillis()
            )
          )
        )
        Behaviors.same
      case GetUser(id, replyTo) =>
        replyTo ! GetUserResponse(repository.findById(id))
        Behaviors.same
      case CreateUser(user, replyTo) =>
        replyTo ! GetUserResponse(Option(user))
        repository.create(user)
        Behaviors.same
    }

}
