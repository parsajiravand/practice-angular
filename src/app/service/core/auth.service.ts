import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
class Login {
  constructor(
    public email: string,
    public password: string,
  ) {}
}
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient,@Inject('BASE_API_URL') private baseUrl: string) {
    
  }
  login(payload: Object) {
     const promise = new Promise<void>((resolve, reject) => {
      this.http.post<Login>(`${this.baseUrl}/api/user/login`,
        payload).subscribe({
        next: (res: any) => {
          console.log(res)
          resolve();
        },
        error: (err: any) => {
          reject(err);
        },
        complete: () => {
          console.log('complete');
        },
      });
    });
    return promise;
  }
}
