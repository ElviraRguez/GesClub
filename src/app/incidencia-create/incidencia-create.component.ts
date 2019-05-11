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
  miembros: Observable<any>;
  
  constructor(private router: Router, private api: ApiService,private formBuilder:FormBuilder,private datePipe: DatePipe) { }

  ngOnInit() {
    this.api.getMiembros().subscribe(res => {this.miembros = res;});
    console.log(this.miembros,"miembros");
  
  this.incidenciaForm = this.formBuilder.group({
    asunto : [null],
    fechaInicio: [null],
    fechaFin: [null],
    miembro: [null],
    detalle: [null]
  });
  }

  onFormSubmit(form: NgForm) {
    console.log(form.value);
    this.api.postIncidencia(form.value)
      .subscribe(res => {
        this.router.navigate(['/incidencias']);
      }, (err) => {
        console.log(err);
      });
  }
}
