import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    //@ts-ignore
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(
      control &&
      control.parent &&
      control.parent.invalid &&
      control.parent.dirty
    );

    return invalidCtrl || invalidParent;
  }
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  checkPasswords: ValidatorFn = (
    form: AbstractControl
  ): ValidationErrors | null => {
    let pass = form.value.password;
    let confirmPass = form.value.confirmPassword;
    return pass === confirmPass ? null : { notSame: true };
  };

  @Input() submitLoading: any;
  form: FormGroup = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    },
    { validators: this.checkPasswords }
  );
  register() {
    if (this.form.valid) {
      this.submitRegisterFormToParent.emit(this.form.value);
    }
  }
  @Input() error: any;

  @Output() submitRegisterFormToParent = new EventEmitter();
  ngOnInit() {}
}
