import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Community } from '../model/community';
import { Flair } from '../model/flair';
import { Post } from '../model/post';
import { User } from '../model/user';
import { CommunityService } from '../services/community.service';
import { FlairService } from '../services/flair.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-update-post-popup',
  templateUrl: './update-post-popup.component.html',
  styleUrls: ['./update-post-popup.component.css']
})
export class UpdatePostPopupComponent implements OnInit {

  closeResult!: string;

  constructor(private modalService: NgbModal, private postService : PostService, private communityService : CommunityService, private flairService : FlairService) { }

  ngOnInit(): void {
    this.getCommunites();
    this.getFlairs();
  }

  openLg(content : any) {
    this.modalService.open(content, { size: 'lg' });
  }

  getCommunites() {
    this.communities = this.communityService.getCommunities();
  }

  getFlairs() {
    this.flairs = this.flairService.getFlairs();
  }

  createPost() {
    this.user.id = 1;
    this.post.user = this.user;
    this.post.community = this.community;
    this.post.flair = this.flair;

    this.postService.post(this.post)
    .subscribe(data => {
      console.log(data)
    })
    
  }

  flair: Flair = new Flair();

  community: Community = new Community();

  user: User = new User();

  post: Post = new Post();

  communities : any[] = [];

  flairs : any[] = [];

}
