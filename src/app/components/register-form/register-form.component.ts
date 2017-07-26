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
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      matchPassword: ''
      //matchPassword: ['', Validators.required, EqualValidatorDirective]
    });
   }

  ngOnInit() {
  }

  addUser(post) {
    //this.firstname = post.firstname;
    //this.name = post.name;
  }

}
