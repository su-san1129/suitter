package com.example.repository

import scalikejdbc.AutoSession

trait BaseRepository[T] {

  implicit val session: AutoSession.type = AutoSession
  def findAll(): Seq[T]
  def findById(id: String): T
  def create(t: T): T
  def update(t: T): T
  def deleteById(id: String): Unit
}
