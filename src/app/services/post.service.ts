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
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
      "Access-Control-Allow-Methods": 'GET,POST,PATCH,DELETE,PUT,OPTIONS'
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
    console.log(this.httpOptions);
    return this.http.post<Post>(environment.ROOT_URL + "posts", body, this.httpOptions)
    .pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      }) 
    )
  }

  upVote(id : number){
    //ne radi zbog jwta
    this.http.post(environment.ROOT_URL +"posts/" + id +"/upVotes", null,  this.httpOptions)
    .subscribe(() => this.status = 'Downvote successful');
    console.log(this.status);
    console.log(environment.ROOT_URL + "posts/" + id +"/upVotes"); 
  }

  downVote(id : number) {
    //ne radi zbog jwta
    this.http.post(environment.ROOT_URL + "posts/" + id +"/downVotes", null, this.httpOptions)
    .subscribe(() => this.status = 'Downvote successful');
    console.log(this.status);
    console.log(environment.ROOT_URL +"posts/" + id +"/downVotes");
  }

  delete(id : number) {
    this.http.delete(environment.ROOT_URL + "posts/" + id, this.httpOptions)
    .subscribe(() => this.status = 'Delete successful');
    console.log(this.status);
  }

  update(post : Post) : Observable<Post>{
    const body=JSON.stringify(post);
    console.log(body)
    return this.http.put<Post>(environment.ROOT_URL + "posts/" + post.id, body, this.httpOptions)
    .pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      }) 
    )
  }
  status : string = "";
}
