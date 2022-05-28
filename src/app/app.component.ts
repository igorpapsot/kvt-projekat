import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router){

  }

  public showHome = true;
  public showLogin = false;
  public showRegister = false;
  public showCommunities = false;

  homeClick(){
    this.showHome = true;
    this.showLogin = false;
    this.showRegister = false;
    this.showCommunities = false;
  }

  signUpClick(){
    this.showRegister = true;
    this.showLogin = false;
    this.showHome = false;
    this.showCommunities = false;
  }

  signInClick(){
    this.showLogin = true;
    this.showRegister = false;
    this.showHome = false;
    this.showCommunities = false;
  }

  communitiesClick() {
    this.showCommunities = true;
    this.showHome = false;
    this.showLogin = false;
    this.showRegister = false;
  }

}
