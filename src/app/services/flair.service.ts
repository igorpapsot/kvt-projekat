import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlairService {

  constructor(private http: HttpClient) { }

  flairs : any[] = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      //Authorization: 'my-auth-token'
    })
  };

  getFlairs() : any[] {
    this.http.get<any[]>(environment.ROOT_URL + "flairs").subscribe(data => {
      this.flairs = data;
    })
    return this.flairs;
  }

}


