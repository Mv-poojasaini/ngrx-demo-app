import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/model/user.type';
import { loadUsers, addUser, removeUser } from 'src/store/user.actions';
import { selectAllUser } from 'src/store/user.selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users$ = this.store.select(selectAllUser);
  newName: string = '';
  newEmail: string = '';
  constructor(private store: Store) {

  }
  ngOnInit() {
    this.store.dispatch(loadUsers())
  }

  removeUser(id: number){
    this.store.dispatch(removeUser({userId: id}))
  };
  addUser() {
    const newUser: User = {
      id: Math.random(),
      name: this.newName,
      email: this.newEmail
    };
    this.store.dispatch(addUser({ user: newUser }))
    this.newName = '';
    this.newEmail = '';
  }
}
