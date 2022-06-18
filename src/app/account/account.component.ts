import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { ChangePasswordDTO } from '../model/changePasswordDTO';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private userService : UserService) {
    this.user.karma = 1;
   }

  ngOnInit(): void {
  }

  user : User = new User();
  changePasswordDTO : ChangePasswordDTO = new ChangePasswordDTO();
  public status : string = "";


  changeUsername() {

  }

  changePassword() {
    const response = this.userService.changePassword(this.changePasswordDTO);
    console.log(response);
    response.pipe().subscribe(res => {
      console.log('status: ' + res);
      if(res.toString() == 'ACCEPTED') {
        this.status = "Password changed succesfully"
      }
      else if (res.toString() == 'NOT_ACCEPTABLE') {
        this.status = "Password isnt correct"
      }
      else {
        
      }
    });
  }

  changeEmail() {
    
  }

  changeDescription() {
    
  }

}
