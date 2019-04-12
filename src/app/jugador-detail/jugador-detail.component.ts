import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-jugador-detail',
  templateUrl: './jugador-detail.component.html',
  styleUrls: ['./jugador-detail.component.css']
})
export class JugadorDetailComponent implements OnInit {

  jugador: any = {};

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.getJugadorDetails(this.route.snapshot.params['id']);
  }

  getJugadorDetails(id) {
    this.api.getJugador(id)
      .subscribe(data => {
        console.log(data);
        this.jugador = data;
      });
  }

  deleteJugador(id){

  }
}
