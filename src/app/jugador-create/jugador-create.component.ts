import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-jugador-create',
  templateUrl: './jugador-create.component.html',
  styleUrls: ['./jugador-create.component.css'],
  providers: [ DatePipe ]
})
export class JugadorCreateComponent implements OnInit {

  jugadorForm: FormGroup;
  dni: string = null;
  nombre: string = null;
  apellidos: string = null;
  fechaNacimiento: Date = new Date();
  edad: number = null;
  pais: string = null;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder, private datePipe: DatePipe) { }

  ngOnInit() {
    this.jugadorForm = this.formBuilder.group({
      dni : [null, [Validators.required, Validators.pattern(/^[XYZ]?([0-9]{7,8})([A-Z])$/)]],
      nombre : [null, Validators.required],
      apellidos : [null, Validators.required],
      fechaNacimiento : [null, Validators.required],
      pais : [null, Validators.required],
      edad : [null]
    });
  }

  onFormSubmit(form: NgForm) {
    form['edad'] = this.calcularEdad(form['fechaNacimiento']);

    this.api.postJugador(form)
      .subscribe(res => {
          this.router.navigate(['/jugadores']);
        }, (err) => {
          console.log(err);
        });
  }

  private calcularEdad(fecha) {
    const hoy = new Date();
    const cumpleanos = new Date(fecha);
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    const m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
  }
}
