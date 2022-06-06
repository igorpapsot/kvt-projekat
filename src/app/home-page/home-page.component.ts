import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostService } from '../services/post.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  posts : any[] = [];

  constructor(private postService : PostService, private modalService: NgbModal) { }

  getPosts() {
    this.posts = this.postService.getPosts();
  }

  ngOnInit(): void {
    this.getPosts();
  }

  ngAfterViewInit() {
    this.getPosts();
  }
  
}
