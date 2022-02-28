package com.example.repository

import scalikejdbc.{AutoSession, WrappedResultSet}

trait BaseRepository[T] {
  implicit val session: AutoSession.type = AutoSession
  protected def convert(rs: WrappedResultSet): T
  def findAll(): Seq[T]
  def findById(id: String): Option[T]
  def create(t: T): T
  def update(t: T): T
  def deleteById(id: String): Unit
}
