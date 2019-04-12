import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-jugador-create',
  templateUrl: './jugador-create.component.html',
  styleUrls: ['./jugador-create.component.css']
})
export class JugadorCreateComponent implements OnInit {

  jugadorForm: FormGroup;
  dni: string = '';
  nombre:string = '';
  apellidos:string = '';
  fechaNacimiento:string = '';
  pais:string = '';

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.jugadorForm = this.formBuilder.group({
      dni : [null, Validators.required],
      nombre : [null, Validators.required],
      apellidos : [null, Validators.required],
      fechaNacimiento : [null, Validators.required],
      pais : [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    console.log(form);
    /*
    this.api.postJugador(form)
      .subscribe(res => {
          this.router.navigate(['/jugadores']);
        }, (err) => {
          console.log(err);
        });
    */
  }
}
