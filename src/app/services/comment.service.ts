import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comment } from '../model/comment';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  options() {
    return  {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
        'Access-Control-Allow-Methods': 'GET,POST,DELETE,PUT'
      })
    };
  }

  getComments(id : number) : Observable<any[]> {
    return this.http.get<any[]>(environment.ROOT_URL + "posts/" + id +  "/comments");
  }

  postComment(postId : number, comment : Comment) : Observable<any> {
    const body=JSON.stringify(comment);
    console.log(body)
    return this.http.post(environment.ROOT_URL + "posts/" + postId +  "/comments", body, this.options());
  }

}
