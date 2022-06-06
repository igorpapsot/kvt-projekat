import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Post } from '../model/post';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient){}

  posts : any[] = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      //Authorization: 'my-auth-token'
    })
  };

  getPosts() : any[] {
    this.http.get<any[]>(environment.ROOT_URL + "posts").subscribe(data => {
      this.posts = data;
    })
    return this.posts;
  }

  post(post : Post) : Observable<Post>{
    const body=JSON.stringify(post);
    console.log(body)
    return this.http.post<Post>(environment.ROOT_URL + "posts", body, this.httpOptions)
    .pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      }) 
      )
    }

}
