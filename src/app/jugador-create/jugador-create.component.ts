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
    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.api.postClubUsuario({idUsuario: user.token}).subscribe(clubs => {
      this.clubs = clubs;
      clubs.forEach(club => {
        this.api.getCategoriaClub({club: club._id}).subscribe(res => {
          this.categorias = res;
        });
      });
    });

    this.jugadorForm = this.formBuilder.group({
      dni : [null, [Validators.required, Validators.pattern(/^[XYZ]?([0-9]{7,8})([A-Z])$/)]],
      nombre : [null, Validators.required],
      apellidos : [null, Validators.required],
      fechaNacimiento : [null, [Validators.required, this.validateDate]],
      pais : [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      telefono: [null, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      direccion: [null, Validators.required],
      observaciones: [null],
      funcion: [null, Validators.required],
      club: [null, Validators.required],
      categoria: [null, Validators.required]
    });
  }

  validateDate(control: FormControl) {
    const fechaActual = new Date();
    if (control.value > fechaActual || control.value === fechaActual) {
      return {fechaNacimiento: false};
    }
    return null;
  }

  onFormSubmit(form: NgForm) {
    form.value.edad = this.api.calcularEdad(form.value.fechaNacimiento);
    if (form.value.observaciones == null) {
      form.value.observaciones = 'Nada';
    }

    form.value.contacto = {
      email: form.value.email,
      telefono: form.value.telefono,
      direccion: form.value.direccion
    };

    console.log(form.value);

    this.api.postMiembro(form.value)
      .subscribe(res => {
          this.router.navigate(['/jugadores']);
        }, (err) => {
          console.log(err);
        });
  }
}
