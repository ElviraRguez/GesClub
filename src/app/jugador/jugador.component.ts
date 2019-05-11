import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'dni', 'edad', 'pais', 'categoria', 'observaciones', 'actions'];
  jugadores: any;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.api.getMiembros()
      .subscribe(res => {
        this.jugadores = res;
        console.log(res);
      }, err => {
        console.log(err);
      });
  }

  deleteJugador(id) {
    this.api.deleteMiembro(id)
    .subscribe(res => {
        window.location.reload();
        //this.router.navigate(['/jugadores']);
      }, (err) => {
        console.log(err);
      }
    );
  }
}
