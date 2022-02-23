package com.example.registry

import akka.actor.typed.ActorRef
import akka.actor.typed.Behavior
import akka.actor.typed.scaladsl.Behaviors

import scala.collection.immutable
import com.example.domain.BaseEntity

final case class Post(
                       id: String,
                       userId: String,
                       content: String,
                       createdAt: Long,
                       updatedAt: Long
                     ) extends BaseEntity

final case class Posts(users: immutable.Seq[Post])

object PostRegistry {
  sealed trait Command
  final case class GetPosts(replyTo: ActorRef[Posts]) extends Command

  def apply(): Behavior[Command] =
    Behaviors.receiveMessage {
      case GetPosts(replyTo) =>
        replyTo ! Posts((1 to 5).map(i =>
          Post(
            "user-id" + i,
            "user-id" + i,
            "Content-" + i,
            System.currentTimeMillis(),
            System.currentTimeMillis()
          )))
        Behaviors.same
    }

}
