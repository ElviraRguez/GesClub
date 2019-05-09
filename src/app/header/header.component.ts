import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() public isUserLoggedIn: boolean;

  username: string;

  constructor() { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user != null) { this.username = user.name; }
  }

}
