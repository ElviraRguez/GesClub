import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {

  jugadores: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getJugadores()
      .subscribe(res => {
        console.log(res);
        this.jugadores = res;
      }, err => {
        console.log(err);
      });
  }

  deleteJugador(id) {

  }
}