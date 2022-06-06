import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  constructor(private http : HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      //Authorization: 'my-auth-token'
    })
  };

  communities : any[] = [];

  getCommunities() : any[] {
    this.http.get<any[]>(environment.ROOT_URL + "communities").subscribe(data => {
      this.communities = data;
    })
    return this.communities;
  }

  deleteCommunity(id : number) {
    this.http.delete(environment.ROOT_URL + "communities/" + id)
    .subscribe(() => this.status = 'Delete successful');
    console.log(this.status);
  }

  suspendCommunity(id : number, reason : String) {
    const body = { suspendedReason : reason };
    this.http.put<any>(environment.ROOT_URL + "communities/" + id + "/suspend", body)
    .subscribe(() => this.suspendStatus = 'Delete successful');
    console.log(this.suspendStatus);
  }

  suspendStatus : string = ""
  status : string = "";
}
