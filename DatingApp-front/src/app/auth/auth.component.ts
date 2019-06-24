import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loginFrom: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginFrom = this.fb.group({
      userName: ['', Validators.required],
      passWord: ['', Validators.required]
    });
  }
  login() {
    console.log(this.loginFrom.value);
  }
}
