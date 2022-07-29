import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],

})
export class LoginFormComponent implements OnInit {
  @Input() submitLoading:any;
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  login() {
    if (this.form.valid) {
      this.submitLoginFormToParent.emit(this.form.value);
    }
  }
  @Input() error: any;

  @Output() submitLoginFormToParent = new EventEmitter();
  constructor(private http: HttpClient) {}
  ngOnInit() {}
}
