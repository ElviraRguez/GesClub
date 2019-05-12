import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'dni', 'edad', 'categoria', 'observaciones', 'pais', 'actions'];
  jugadores: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.api.postClubUsuario({idUsuario: user.token})
    .subscribe(club => {
      this.miembrosClub(club);
    }, (err) => {
      console.log(err);
    });
  }

  applyFilter(filterValue: string) {
    this.jugadores.filter = filterValue.trim().toLowerCase();

    if (this.jugadores.paginator) {
      this.jugadores.paginator.firstPage();
    }
  }

  deleteJugador(id) {
    this.api.deleteMiembro(id)
    .subscribe(res => {
        window.location.reload();
      }, (err) => {
        console.log(err);
      }
    );
  }

  private miembrosClub(clubs) {
    clubs.forEach(club => {
      this.api.postMiembrosClub({club: club._id})
      .subscribe(miembros => {
        this.getCategoriaName(miembros);
        this.jugadores = new MatTableDataSource<any>(miembros);

        this.jugadores.paginator = this.paginator;
        this.jugadores.sort = this.sort;
      }, err => {
        console.log(err);
      });
    });
  }

  private getCategoriaName(miembros) {
    miembros.forEach(miembro => {
      this.api.getCategoria(miembro.categoria).subscribe(categoria => {
        miembro.categoria = categoria;
      });
    });
  }
}
