import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./user.reducers";

export const selectUserState = createFeatureSelector<State>('user')
export const selectAllUser = createSelector(
  selectUserState,
  (state: State) => state.users
  
)