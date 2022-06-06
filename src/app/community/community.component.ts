import { Component, Input, OnInit } from '@angular/core';
import { Community } from '../model/community';
import { CommunityService } from '../services/community.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  constructor(private communityService : CommunityService) { }

  ngOnInit(): void {
  }

  @Input()
  community : Community = new Community();

  delete() {
    this.communityService.deleteCommunity(this.community.id)
  }

}
