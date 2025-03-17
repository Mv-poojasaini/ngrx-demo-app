import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Posts } from 'src/model/post.type';
import { User } from 'src/model/user.type';
import { PostService } from 'src/service/post.service';
import { loadUsers, addUser, removeUser } from 'src/store/user.actions';
import { selectAllUser, selectAllErrors } from 'src/store/user.selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users$ : Observable<User[]>
  error$ : Observable<string>
  posts: Posts[] = [];
  newName: string = '';
  newEmail: string = '';
  constructor(private store: Store, private postService: PostService) {
    this.users$ = this.store.select(selectAllUser)
    this.error$ = this.store.select(selectAllErrors)
  }
  ngOnInit() {

    this.store.dispatch(loadUsers())
    this.postService.getPost().subscribe({
      next: (response: Posts[]) => {
        this.posts = response.slice(0,3);
      },
      error: (error: Error) => {
        console.error(error);
      }
    })
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
