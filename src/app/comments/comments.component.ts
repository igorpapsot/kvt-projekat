import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../model/post';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  post: Post = new Post();

}
