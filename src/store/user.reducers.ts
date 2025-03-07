import { createReducer, on } from "@ngrx/store";
import { addUser, loadUsers, loadUsersWithFailure, loadUsersWithSuccess, removeUser } from "./user.actions";
import { User } from "src/model/user.type";

export type State = {
  users: User[]
  error: string
}
export const intialState: State = {
  users: [],
  error: ""
}
export const userReducer = createReducer(
  intialState,
  on(loadUsers, (state) => ({...state, users: state.users})),
  on(addUser, (state, { user }) => ({ ...state, users: [...state.users, user] })),
  on(removeUser, (state, { userId }) => ({
    ...state,
    users: state.users.filter((user) => user.id !== userId)
  })),
  on(loadUsersWithSuccess, (state,{users}) => ({ ...state, users })),
  on(loadUsersWithFailure, (state, {error}) => ({...state, error}) )
);