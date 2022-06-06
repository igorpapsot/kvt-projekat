import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService : PostService) { }

  @Input()
  public title : string = "";

  @Input()
  public communityName : string = "";

  @Input()
  public text : string = "";

  @Input()
  public flairName : string = "";

  @Input()
  public id : number = 0;

  ngOnInit(): void {
  }

  upVote() {
    this.postService.upVote(this.id);
  }

  downVote() {
    this.postService.downVote(this.id);
  }

}
