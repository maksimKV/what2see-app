import { Component, OnInit } from '@angular/core';
import { EqualValidatorDirective } from '../../directives/equal-validator.directive';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
  providers: [FormBuilder]
})
export class RegisterFormComponent implements OnInit {
  private form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/)])],
      matchPassword: ''
    });
   }

  ngOnInit() {
  }

  onSubmit(formValues :any) : void {
    
    // Make sure the form is valid, before proceeding
    if (this.form.valid) {
      let firstname = formValues.firstname;
      let lastname = formValues.lastname;
      let email = formValues.email;
      let password = formValues.password;
    }
    // Trigger validation if form is not valid
    else {
      this.form.controls.firstname.markAsDirty();
      this.form.controls.lastname.markAsDirty();
      this.form.controls.email.markAsDirty();
      this.form.controls.password.markAsDirty();
      this.form.controls.matchPassword.markAsDirty();
    }
  }

}
