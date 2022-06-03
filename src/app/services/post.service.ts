import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient){}

  posts : any[] = [];

  getPosts() : any[] {
    this.http.get<any[]>(environment.ROOT_URL + "posts").subscribe(data => {
      this.posts = data;
    })
    return this.posts;
  }

}
