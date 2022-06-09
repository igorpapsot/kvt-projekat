import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { 
    if(sessionStorage.getItem('token')){
      this.loginStatus = true;
    }
  }

  public loginStatus = false;

  public token : any;

  public role : string = "";

  public username : string = "";

  setLoginStatus(status: boolean) {
    this.loginStatus = status;
  }

  setToken(token: any) {
    this.token = token;
    this.role = token.role.authority;
    this.username = token.sub;
    console.log(this.username);
    console.log(this.role);
  }

}
