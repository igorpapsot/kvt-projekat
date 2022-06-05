import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService : UserService) { }

  @Output() login = new EventEmitter<string>();

  ngOnInit(): void {
  }

  register() {
    this.userService.register(this.user)
    .subscribe(data => {
      console.log(data)
    })
    this.login.next('')
  }

  user = new User();
}
