import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(public store : StoreService, private router : Router) { }

  ngOnInit(): void {
    this.logOut();
  }

  logOut() {
    console.log("asdads");
    sessionStorage.removeItem('token');
    this.store.loginStatus = false;
    this.router.navigateByUrl("/home");
  }

}
