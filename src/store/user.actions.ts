import { createAction, props } from "@ngrx/store";
import { User } from "src/model/user.type";

export const loadUsers = createAction("[User]Load Users");

export const addUser = createAction(
  "[User] Add users",
  props<{ user: User }>(),
)

export const removeUser = createAction(
  "[User] Remove users",
  props<{ userId: number }>(),
)