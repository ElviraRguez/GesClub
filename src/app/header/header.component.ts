import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() public isUserLoggedIn: boolean;

  username: string;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user != null) { this.username = user.name; }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
