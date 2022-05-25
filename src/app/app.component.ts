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

  public showLogin = false;
  public showRegister = false;
  public showHome = true;

  homeClick(){
    this.showHome = true;
    this.showLogin = false;
    this.showRegister = false;
  }

  signUpClick(){
    this.showRegister = true;
    this.showLogin = false;
    this.showHome = false;
  }

  signInClick(){
    this.showLogin = true;
    this.showRegister = false;
    this.showHome = false;
  }

}
