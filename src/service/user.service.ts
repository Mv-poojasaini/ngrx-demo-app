import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { User } from "src/model/user.type";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUsers(): Observable<User[]> {
    return of(
      [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' }
      ]
      )
  }
}