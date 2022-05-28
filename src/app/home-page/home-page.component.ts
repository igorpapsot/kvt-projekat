import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public readonly ROOT_URL = 'http://localhost:8080/';

  posts : any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<any[]>(this.ROOT_URL + "posts").subscribe(data => {
        this.posts = data;
    })
    
  }
  
}
