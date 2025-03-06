import { createReducer, on } from "@ngrx/store";
import { addUser, loadUsers, removeUser } from "./user.actions";
import { User } from "src/model/user.type";

export type State = {
  users: User[]
}
export const intialState: State = {
  users: [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' }
  ]
}
export const userReducer = createReducer(
  intialState,
  on(loadUsers, (state) => ({...state, users: state.users})),
  on(addUser, (state, { user }) => ({ ...state, users: [...state.users, user] })),
  on(removeUser, (state, { userId }) => ({
    ...state,
    users: state.users.filter((user) => user.id !== userId)
  }))
);