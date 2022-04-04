package com.example.domain.user

import com.example.registry.User

import java.util.UUID

case class CreateUserRequest(name: String, email: String, password: String, phoneNumber: String, icon: String) {
  def toUser(): User = {
    User(
      id = UUID.randomUUID().toString,
      name = name,
      email = email,
      password = password,
      phoneNumber = phoneNumber,
      isPrivate = false,
      icon = "",
      createdAt = System.currentTimeMillis(),
      updatedAt = System.currentTimeMillis()
    )
  }
}
