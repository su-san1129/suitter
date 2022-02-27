package com.example.config

import akka.actor.typed.ActorSystem

import scala.io.Source
import scala.util.Using

object JdbcConfig {

  import scalikejdbc._
  import scalikejdbc.config._

  implicit val session: AutoSession.type = AutoSession

  def initConnection()(implicit system: ActorSystem[_]): Unit = {
    DBs.setupAll()
    initDB()
    system.log.info("Setup jdbc connection.")
  }

  def close()(implicit system: ActorSystem[_]): Unit = {
    DBs.close()
    system.log.info("Shutdown jdbc connection.")
  }

  def initDB(): Unit = {
    Using(Source.fromFile("src/main/resources/db/setup/init.sql")) {
      source => {
        val interpolationString = new SQLInterpolationString(StringContext(source.mkString))
        interpolationString.sql().execute.apply()
      }
    }
  }
}
