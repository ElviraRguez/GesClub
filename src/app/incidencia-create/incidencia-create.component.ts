import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-incidencia-create',
  templateUrl: './incidencia-create.component.html',
  styleUrls: ['./incidencia-create.component.css'],
  providers: [DatePipe]
})
export class IncidenciaCreateComponent implements OnInit {

  incidenciaForm: FormGroup;
  miembro: Observable<any>;
  
  constructor(private router: Router, private api: ApiService,private formBuilder:FormBuilder,private datePipe: DatePipe) { }

  ngOnInit() {
    this.api.getMiembros().subscribe(res => {this.miembro = res;});
  
  this.incidenciaForm = this.formBuilder.group({
    asunto : [null],
    fechaInicio: [null],
    fechaFin: [null],
    miembro: [null],
    detalle: [null]
  });
  }

  //metodo para insertar incidencia
}
