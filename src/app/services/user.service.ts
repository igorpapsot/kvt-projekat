import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Jwt } from '../model/jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      //Authorization: 'my-auth-token'
    })
  };

  httpOptionsLogin = {
    headers: new HttpHeaders({
      'Content-Type':  'text/plain',
      //Authorization: 'my-auth-token'
      'responseType': 'text' as 'json'
      
    })
  };

  register(user : User) : Observable<User>{
    const body=JSON.stringify(user);
    console.log(body)
    return this.http.post<User>(environment.ROOT_URL + "users", body, this.httpOptions)
    .pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      }) 
      )
  }

  login(user : User) : Observable<Jwt>{
    const body=JSON.stringify(user);
    console.log(body)
    return this.http.post<Jwt>(environment.ROOT_URL + "users/login", body, this.httpOptions)
  }

  
}
