import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/model/user.type';
import { PostService } from 'src/service/post.service';
import { addUser, loadUsers } from 'src/store/user.actions';
import { selectAllUser } from 'src/store/user.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PostService]
})
export class AppComponent {

  title = 'demo-ngrx-usermanagement';

}
