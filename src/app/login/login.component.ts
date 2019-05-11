import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  sesionForm: FormGroup;

  constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.authService.logout();
    this.sesionForm = this.formBuilder.group({
      email: ['admin@admin.com', [Validators.required, Validators.email]],
      password: ['admin', [Validators.required, Validators.minLength(4)]]
    });
  }

  login(form: NgForm) {
    this.authService.login(form.value)
      .subscribe(res => {
          this.router.navigate(['/menu']);
        }, (err) => {
          console.log(err);
        });
  }
}
