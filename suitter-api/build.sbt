name := "suitter-api"

version := "0.1"

scalaVersion := "2.13.8"
val AkkaVersion = "2.6.18"
val AkkaHttpVersion = "10.2.8"

libraryDependencies ++= Seq(
  "org.scalikejdbc" %% "scalikejdbc" % "3.5.0",
  "org.scalikejdbc" %% "scalikejdbc-config" % "3.5.0",
  "com.h2database" % "h2" % "1.4.200",
  "ch.qos.logback" % "logback-classic" % "1.2.3",
  "com.typesafe.akka" %% "akka-actor-typed" % AkkaVersion,
  "com.typesafe.akka" %% "akka-stream" % AkkaVersion,
  "com.typesafe.akka" %% "akka-http" % AkkaHttpVersion,
  "com.typesafe.akka" %% "akka-http-spray-json" % AkkaHttpVersion,
  "ch.megard" %% "akka-http-cors" % "1.1.3",
  "com.github.jwt-scala" %% "jwt-core" % "9.0.5"
)