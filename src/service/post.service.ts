import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Posts } from 'src/model/post.type';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl: string =  "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) { }

  getPost(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.apiUrl);
  }

}
