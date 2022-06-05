import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

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

  register(user : User) : Observable<User>{
    const body=JSON.stringify(user);
    console.log(body + "(service deo)")
    return this.http.post<User>(environment.ROOT_URL + "users", body, this.httpOptions)
    .pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      }) 
      )
    }
  
}
