import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post';
import { CommentService } from '../services/comment.service';
import { StoreService } from '../services/store.service';
import { Comment } from '../model/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input()
  post: Post = new Post();

  comments!: Observable<any[]>;

  comment : Comment = new Comment();

  constructor(private commentService : CommentService, public store : StoreService) { }

  getComments() {
    this.comments = this.commentService.getComments();
  }

  ngOnInit(): void {
    this.getComments();
  }

  postComment() {

  }
} 
