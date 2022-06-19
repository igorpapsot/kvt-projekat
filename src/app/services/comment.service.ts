import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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

  getComments() : Observable<any[]> {
    return this.http.get<any[]>(environment.ROOT_URL + "comments");
  }

}
