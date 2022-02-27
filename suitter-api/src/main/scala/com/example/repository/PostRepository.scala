package com.example.repository

import com.example.registry.Post
import scalikejdbc.{WrappedResultSet, scalikejdbcSQLInterpolationImplicitDef}

class PostRepository extends BaseRepository[Post] {

  object ConvertToPost {
    def apply(rs: WrappedResultSet): Post = Post(
      rs.string("id"),
      rs.string("user_id"),
      rs.string("content"),
      rs.long("created_at"),
      rs.long("updated_at"),
    )
  }

  override def findAll(): Seq[Post] = {
    sql"SELECT * FROM posts".map(rs => ConvertToPost(rs)).list.apply()
  }

  override def findById(id: String): Post = ???

  override def create(post: Post): Post = {
    sql"""
      INSERT INTO posts (id, user_id, content, created_at, updated_at)
      VALUES (RANDOM_UUID(), ${post.userId}, ${post.content}, ${System.currentTimeMillis()}, ${System.currentTimeMillis()})
    """.update.apply()
    post
  }

  override def update(t: Post): Post = ???

  override def deleteById(id: String): Unit = ???
}
