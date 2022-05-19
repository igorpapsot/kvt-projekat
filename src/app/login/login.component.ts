import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  submitted = false;

  model = new User(1, "", "");

  
}
