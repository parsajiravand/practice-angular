import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent{

submitLoginForm(data:any) {
     console.log('payload in parent',data)
  }
  constructor(private http: HttpClient) {}

  login(payload:Object) {
    return this.http
      .post<any>('https://practice-node-parsa.herokuapp.com/api/user/login',payload)
      .subscribe((data) => {
        console.log(data)
      });
  }
}
