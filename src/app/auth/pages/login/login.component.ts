import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authServices : AuthService,
  ) { }

  myForm: FormGroup = this.fb.group({

    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  resultsRedirect() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    this.authServices.loginUser(this.myForm.controls['username'].value)
    this.router.navigate(['results']);
  }

  validateInput(field: String) {
    return (this.myForm.controls[`${field}`].errors && this.myForm.controls[`${field}`].touched)
  }

}
