import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/core/auth.service';
import { Router } from '@angular/router';
//@ts-ignore
import Cookies from 'js-cookie';

class Response {
  constructor(
    public status: boolean,
    public message: string,
    public data: object | string[]
  ) {}
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loading = false;
  submitLoginForm(payload: object) {
    this.loading = true;
    this.loginService.login(payload).then((res: Response | any) => {
      console.log('ressssssss', res.status);
      if (res.status) {
        Cookies.set('NG_USER', JSON.stringify(res.data.user), { expires: 60 });
        this.router.navigate(['/']);
      }
      this.loading = false;
    });
  }
  constructor(private loginService: LoginService, private router: Router) {}
  ngOnInit() {
    console.log(this.router);
  }
}
