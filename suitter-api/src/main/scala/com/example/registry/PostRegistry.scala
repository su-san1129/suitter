package com.example.registry

import akka.actor.typed.{ActorRef, Behavior}
import akka.actor.typed.scaladsl.Behaviors
import com.example.domain.BaseEntity
import com.example.repository.{PostRepository, UserRepository}

import scala.collection.immutable

final case class Post(
                       id: String,
                       userId: String,
                       content: String,
                       createdAt: Long,
                       updatedAt: Long
                     ) extends BaseEntity {
  def convertToPostResponse(post: Post, user: User): PostResponse =
    PostResponse(post.id, post.userId, user, post.content, post.createdAt, post.updatedAt)
}

final case class PostResponse(
                               id: String,
                               userId: String,
                               user: User,
                               content: String,
                               createdAt: Long,
                               updatedAt: Long
                             )

final case class Posts(posts: immutable.Seq[PostResponse])

object PostRegistry {
  sealed trait Command

  final case class GetPosts(replyTo: ActorRef[Posts]) extends Command

  final case class Create(post: Post, replyTo: ActorRef[Post]) extends Command

  val repository: PostRepository = PostRepository()
  val userRepository: UserRepository = UserRepository()

  def apply(): Behavior[Command] =
    Behaviors.receiveMessage {
      case GetPosts(replyTo) =>
        val postResponse = repository.findAll().map {
          post => {
            val user = userRepository.findById(post.userId).orNull
            post.convertToPostResponse(post, user)
          }
        }
        replyTo ! Posts(postResponse)
        Behaviors.same
      case Create(post, replyTo) =>
        replyTo ! repository.create(post)
        Behaviors.same
    }

}
