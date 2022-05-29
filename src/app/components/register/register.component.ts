import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public userForm: FormGroup;

  constructor(public loginService: LoginService,
    public formBuilder: FormBuilder,
    public router: Router) {
    this.userForm = this.formBuilder.group(
      {
        name: [''],
        pass: ['']
      }
    );
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loginService.createUser(this.userForm.value);
    this.router.navigate(['']);
  }
}
