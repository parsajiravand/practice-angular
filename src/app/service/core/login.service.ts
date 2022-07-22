import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient,@Inject('BASE_API_URL') private baseUrl: string) {
    
  }
  login(payload: Object) {
    return this.http
      .post<any>(
        `${this.baseUrl}/api/user/login`,
        payload
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
