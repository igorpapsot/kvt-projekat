import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from '../model/post';
import { User } from '../model/user';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-create-post-popup',
  templateUrl: './create-post-popup.component.html',
  styleUrls: ['./create-post-popup.component.css'],
})
export class CreatePostPopupComponent implements OnInit {

  closeResult!: string;

  constructor(private modalService: NgbModal, private postService : PostService) { }

  ngOnInit(): void {
  }

  openLg(content : any) {
    this.modalService.open(content, { size: 'lg' });
  }

  createPost() {

    this.user.id = 1;
    this.post.user = this.user;  

    this.postService.post(this.post)
    .subscribe(data => {
      console.log(data)
    })
  }

  user: User = new User();

  post: Post = new Post();

}
