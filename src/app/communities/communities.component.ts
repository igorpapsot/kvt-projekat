import { Component, OnInit } from '@angular/core';
import { CommunityService } from '../services/community.service';


@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.css']
})
export class CommunitiesComponent implements OnInit {

  constructor(private communityService : CommunityService) { }

  communities : any[] = [];

  getCommunites() {
    this.communities = this.communityService.getCommunities();
  }

  ngOnInit(): void {
    this.getCommunites();
  }

}
  
