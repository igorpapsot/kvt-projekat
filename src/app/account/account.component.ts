import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor() {
    this.user.karma = 1;
   }

  ngOnInit(): void {
  }

  user : User = new User();


  changeUsername() {

  }

  changePassword() {
    
  }

  changeEmail() {
    
  }

  changeDescription() {
    
  }

}
