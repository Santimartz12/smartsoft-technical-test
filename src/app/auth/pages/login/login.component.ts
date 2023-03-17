import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) { }

  myForm: FormGroup = this.fb.group({

    // TODO: Erase all these values;
    username: ['1234567890', [Validators.required]],
    password: ['1234567890', [Validators.required, Validators.minLength(6)]],
  })

  dashboardRedirect() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    this.router.navigate(['dashboard']);
  }

  validateInput(field: String) {
    return (this.myForm.controls[`${field}`].errors && this.myForm.controls[`${field}`].touched)
  }

}
