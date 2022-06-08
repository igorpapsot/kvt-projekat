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

  setLoginStatus(status: boolean) {
    this.loginStatus = status;
  }

}
