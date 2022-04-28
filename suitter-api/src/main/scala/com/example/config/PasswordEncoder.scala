package com.example.config

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder

object PasswordEncoder {
  val self = new BCryptPasswordEncoder()
  def apply() = self
}
