package com.example.config

import pdi.jwt.{Jwt, JwtAlgorithm}

import scala.util.Try

object JWTConfig {

  val secretKey = "suiiter-securet-key"

  def generateToken(email: String): String = {
    val token = Jwt.encode(s"""{"email":${email}""", secretKey, JwtAlgorithm.HS256)
    token
  }

  def decode(token: String): Try[(String, String, String)] = {
    Jwt.decodeRawAll(token, secretKey, Seq(JwtAlgorithm.HS256))
  }

  def validate(token: String): Boolean = {
    Jwt.isValid(token, secretKey, Seq(JwtAlgorithm.HS256))
  }
}