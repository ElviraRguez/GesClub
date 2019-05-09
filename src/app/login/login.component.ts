import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  sesionForm: FormGroup;

  constructor(private router: Router, private loginService: LoginService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginService.logout();
    this.sesionForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(4)]]
    });
  }

  login(form: NgForm) {
    this.loginService.login(form.value)
      .subscribe(res => {
          this.router.navigate(['/menu']);
        }, (err) => {
          console.log(err);
        });
  }
}
