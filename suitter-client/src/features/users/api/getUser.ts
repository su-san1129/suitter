import { User } from "../types";

export const getUser = (): User => {
  return {
    id: "user-1",
    name: "user-1",
    email: "user-1@example.com",
    password: "",
    phoneNumber: 12345678900,
    isPrivate: false,
    createdAt: "2022-02-06 01:05:00",
    updatedAt: "",
  };
};
