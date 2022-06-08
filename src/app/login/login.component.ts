import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Jwt } from '../model/jwt';
import { User } from '../model/user';
import { StoreService } from '../services/store.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService :UserService, private storeSevice : StoreService, private router : Router) { }

  ngOnInit(): void {
  }

  login() {
    this.userService.login(this.user)
    .subscribe(jwt => {
      console.log(jwt)
      sessionStorage.clear;
      sessionStorage.removeItem('token');
      sessionStorage.setItem('token', jwt.jwt);
    });
    this.storeSevice.setLoginStatus(true);
    this.router.navigateByUrl("/home");
  }

  submitted = false;

  jwt : Jwt = new Jwt();

  user = new User();

}
