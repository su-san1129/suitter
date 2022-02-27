package com.example.registry

import akka.actor.typed.ActorRef
import akka.actor.typed.Behavior
import akka.actor.typed.scaladsl.Behaviors

import scala.collection.immutable
import com.example.domain.BaseEntity
import com.example.repository.PostRepository

import java.sql.Timestamp

final case class Post(
                       id: String,
                       userId: String,
                       content: String,
                       createdAt: Long,
                       updatedAt: Long
                     ) extends BaseEntity

final case class Posts(posts: immutable.Seq[Post])

object PostRegistry {
  sealed trait Command
  final case class GetPosts(replyTo: ActorRef[Posts]) extends Command
  final case class Create(post: Post, replyTo: ActorRef[Post]) extends Command

  final val repository: PostRepository = new PostRepository()

  def apply(): Behavior[Command] =
    Behaviors.receiveMessage {
      case GetPosts(replyTo) =>
        replyTo ! Posts(repository.findAll())
        Behaviors.same
      case Create(post, replyTo) =>
        replyTo ! repository.create(post)
        Behaviors.same
    }

}
