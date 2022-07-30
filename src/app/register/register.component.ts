import { Component } from '@angular/core';
import { AuthService } from '../service/core/auth.service';
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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private authService: AuthService, private router: Router) {}
  loading = false;
  submitRegisterForm(payload: object) {
    this.loading = true;
    this.authService.register(payload).then((res: Response | any) => {
      console.log('ressssssss', res.status);
      if (res.status) {
        Cookies.set('NG_USER', JSON.stringify(res.data.user), { expires: 60 });
        this.router.navigate(['/']);
      }
      this.loading = false;
    });
  }
}
