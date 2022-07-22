import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/core/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  submitLoginForm(payload: object) {
    console.log('payload in parent', payload);
    this.loginService.login(payload);
  }
  constructor(private loginService: LoginService) {}
}
