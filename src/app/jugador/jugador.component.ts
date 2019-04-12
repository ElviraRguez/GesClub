import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

export class JugadorDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super();
  }

  connect() {
    return this.api.getJugadores();
  }

  disconnect() { }
}

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {

  jugadores: any;
  displayedColumns = ['dni', 'nombre', 'apellidos'];
  dataSource = new JugadorDataSource(this.api);

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
}