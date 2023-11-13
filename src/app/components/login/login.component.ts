import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: any = {};
  loginForm = FormGroup;
  constructor(private userService: UserService) {}

  ngOnInit(): void {}
  Login() {
    console.log(this.user);
    this.userService.login(this.user).subscribe();
  }
}
