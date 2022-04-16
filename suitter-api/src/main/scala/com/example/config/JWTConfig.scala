package com.example.config

import com.example.registry.User
import pdi.jwt.{Jwt, JwtAlgorithm}

import scala.util.Try

object JWTConfig {

  // FIXME: 環境変数に変更する
  val secretKey = "suitter-secret-key"

  def generateToken(user: User): String = {
    val claim =
      s"""
      {
        "id": "${user.id}",
        "email": "${user.email}"
      }
      """.stripMargin
    val token = Jwt.encode(claim, secretKey, JwtAlgorithm.HS256)
    token
  }

  def decode(token: String): Try[(String, String, String)] = {
    Jwt.decodeRawAll(token, secretKey, Seq(JwtAlgorithm.HS256))
  }

  def validate(token: String): Boolean = {
    Jwt.isValid(token, secretKey, Seq(JwtAlgorithm.HS256))
  }
}
