import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  posts : any[] = [];

  constructor(private postService : PostService) { }

  getPosts() {
    this.posts = this.postService.getPosts();
  }

  ngOnInit(): void {
    this.getPosts();
  }
  
}
