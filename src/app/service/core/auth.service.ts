import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
class Login {
  constructor(public email: string, public password: string) {}
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    @Inject('BASE_API_URL') private baseUrl: string
  ) {}
  login(payload: Object) {
    const promise = new Promise<void>((resolve, reject) => {
      this.http
        .post<Login>(`${this.baseUrl}/api/user/login`, payload)
        .subscribe({
          next: (res: any) => {
            console.log(res);
            resolve(res);
          },
          error: (err: any) => {
            resolve(err.error);
          },
          complete: () => {
            console.log('complete');
          },
        });
    });
    return promise;
  }
  register(payload: Object) {
    const promise = new Promise<void>((resolve, reject) => {
      this.http
        .post<Login>(`${this.baseUrl}/api/user/register`, payload)
        .subscribe({
          next: (res: any) => {
            console.log(res);
            resolve(res);
          },
          error: (err: any) => {
            resolve(err.error);
          },
          complete: () => {
            console.log('complete');
          },
        });
    });
    return promise;
  }
}
