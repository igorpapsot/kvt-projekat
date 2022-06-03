import { Component, Input, OnInit } from '@angular/core';

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

  ngOnInit(): void {
  }

}
