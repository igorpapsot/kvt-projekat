import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  @Input()
  public title : string = "";

  @Input()
  public communityName : string = "";

  @Input()
  public text : string = "";

  @Input()
  public flairName : string = "";

  ngOnInit(): void {
  }

}
