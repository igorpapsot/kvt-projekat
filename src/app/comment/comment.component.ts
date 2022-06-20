import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../model/comment';
import { CommentService } from '../services/comment.service';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment : Comment = new Comment();

  constructor(public store : StoreService, private commentService : CommentService) { }

  ngOnInit(): void {
  }

  delete() {
    this.commentService.deleteComment(this.comment.post.id, this.comment.id);
    const response = this.commentService.deleteComment(this.comment.post.id, this.comment.id);
    response.pipe().subscribe(res => {
      console.log('status: ' + res);
      if (res.toString() == 'OK') {
       console.log(res);
      }
      else {
        console.log(res);
      }
    })
  }


  edit() {

  }

}
