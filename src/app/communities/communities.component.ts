import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.css']
})
export class CommunitiesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public readonly ROOT_URL = 'http://localhost:8080/';

  communities : any[] = [];

  ngOnInit(): void {
    this.http.get<any[]>(this.ROOT_URL + "communities").subscribe(data => {
      this.communities = data;
  })
  }
  

}
