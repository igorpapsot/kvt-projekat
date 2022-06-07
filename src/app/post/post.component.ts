import { Component, Input, OnInit } from '@angular/core';
import { Community } from '../model/community';
import { Flair } from '../model/flair';
import { Post } from '../model/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService : PostService) { }

  // @Input()
  // public title : string = "";

  // @Input()
  // public communityName : string = "";

  // @Input()
  // public text : string = "";

  // @Input()
  // public flairName : string = "";

  @Input()
  public id : number = 0;

  @Input()
  public post : Post = new Post();

  @Input()
  public flair : Flair = new Flair();

  @Input()
  public community : Community = new Community();

  ngOnInit(): void {
  }

  upVote() {
    this.postService.upVote(this.id);
  }

  downVote() {
    this.postService.downVote(this.id);
  }

  delete() {
    this.postService.delete(this.id);
  }

  upDate() {

  }
 


}
