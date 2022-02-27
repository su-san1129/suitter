package com.example.registry

import akka.actor.typed.ActorRef
import akka.actor.typed.Behavior
import akka.actor.typed.scaladsl.Behaviors

import scala.collection.immutable
import com.example.domain.BaseEntity

import java.sql.Timestamp

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

  def apply(): Behavior[Command] =
    Behaviors.receiveMessage {
      case GetUsers(replyTo) =>
        replyTo ! Users((1 to 5).map(i =>
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
          )))
        Behaviors.same
    }

}
