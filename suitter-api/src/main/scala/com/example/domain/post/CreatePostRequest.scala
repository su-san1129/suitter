package com.example.domain.post

import com.example.registry.Post

import java.util.UUID

final case class CreatePostRequest(userId: String, content: String) {
  def toPost(): Post = {
    Post(
      id = UUID.randomUUID().toString,
      userId = this.userId,
      content = this.content,
      createdAt = System.currentTimeMillis(),
      updatedAt = System.currentTimeMillis()
    )
  }
}
