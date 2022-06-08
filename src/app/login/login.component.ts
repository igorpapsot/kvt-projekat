import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Jwt } from '../model/jwt';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService :UserService) { }

  ngOnInit(): void {
  }

  login() {
    this.userService.login(this.user)
    .subscribe(jwt => {
      console.log(jwt)
      localStorage.setItem('token', jwt.jwt);
    });
  }

  submitted = false;

  jwt : Jwt = new Jwt();

  user = new User();

}
