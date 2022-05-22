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

  homeClick(){
    this.showLogin = false;
    this.showRegister = false;
  }

  signUpClick(){
    this.showRegister = true;
    this.showLogin = false;
  }

  signInClick(){
    this.showLogin = true;
    this.showRegister = false;
  }

}
