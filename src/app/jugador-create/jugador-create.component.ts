import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Miembro } from '../models/miembro';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-jugador-create',
  templateUrl: './jugador-create.component.html',
  styleUrls: ['./jugador-create.component.css'],
  providers: [ DatePipe ]
})
export class JugadorCreateComponent implements OnInit {

  jugadorForm: FormGroup;
  clubs: Observable<any>;
  categorias: Observable<any>;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder, private datePipe: DatePipe) { }

  ngOnInit() {
    this.api.getClubs().subscribe(res => { this.clubs = res; });
    this.api.getCategorias().subscribe(res => { this.categorias = res; });

    this.jugadorForm = this.formBuilder.group({
      dni : [null, [Validators.required, Validators.pattern(/^[XYZ]?([0-9]{7,8})([A-Z])$/)]],
      nombre : [null, Validators.required],
      apellidos : [null, Validators.required],
      fechaNacimiento : [null, Validators.required],
      pais : [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      telefono: [null, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      direccion: [null, Validators.required],
      observaciones: [null],
      funcion: [null],
      club: [null],
      categoria: [null]
    });
  }

  onFormSubmit(form: NgForm) {
    console.log(form.value);
    form.value.edad = this.api.calcularEdad(form.value.fechaNacimiento);
    if(form.value.observaciones == null) {
      form.value.observaciones = 'Nada';
    }

    /*this.api.postMiembro(form.value)
      .subscribe(res => {
          this.router.navigate(['/jugadores']);
        }, (err) => {
          console.log(err);
        });*/
  }
}
