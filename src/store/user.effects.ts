import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "src/service/user.service";
import { loadUsers, loadUsersWithFailure, loadUsersWithSuccess } from "./user.actions";
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService
  ) { }

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map((users) => loadUsersWithSuccess({ users })),
          catchError((error) => of(loadUsersWithFailure({ error: error.message || "something went wrong"})))
        )
      )
    )
  );
}