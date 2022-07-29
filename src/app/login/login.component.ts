import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/core/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loading = false;
  submitLoginForm(payload: object) {
    this.loading = true;
    this.loginService.login(payload).then((_response) => {
      console.log('res from comp', _response);
      this.loading = false;
    });
  }
  constructor(private loginService: LoginService, private router: Router) {}
  ngOnInit() {
    console.log(this.router);
  }
}
