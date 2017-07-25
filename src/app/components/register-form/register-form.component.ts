import { Component, OnInit } from '@angular/core';

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
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    })
   }

  ngOnInit() {
  }

}
