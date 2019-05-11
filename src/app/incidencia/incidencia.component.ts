import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-incidencia',
    templateUrl: './Incidencia.component.html',
    styleUrls: ['./Incidencia.component.css']
})

export class IncidenciaComponent {
    displayedColumns: string[] = ['asunto','fechaInicio','fechaFin','miembro','actions'];
    incidencias: any;

    constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

    ngOnInit() {
        this.api.getIncidencias()
          .subscribe(res => {
            this.incidencias = res;
          }, err => {
            console.log(err);
          });
      }
    
      deleteIncidencia(id) {
        this.api.deleteIncidencia(id)
        .subscribe(res => {
            window.location.reload();
            //this.router.navigate(['/jugadores']);
          }, (err) => {
            console.log(err);
          }
        );
      }
}