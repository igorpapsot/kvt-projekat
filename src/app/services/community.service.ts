import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  constructor(private http : HttpClient) { }

  communities : any[] = [];

  getCommunities() : any[] {
    this.http.get<any[]>(environment.ROOT_URL + "communities").subscribe(data => {
      this.communities = data;
    })
    return this.communities;
  }
}
