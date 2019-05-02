import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-jugador-edit',
  templateUrl: './jugador-edit.component.html',
  styleUrls: ['./jugador-edit.component.css']
})
export class JugadorEditComponent implements OnInit {

  jugadorForm: FormGroup;
  id: string = null;
  dni: string = null;
  nombre: string = null;
  apellidos: string = null;
  fechaNacimiento: Date = null;
  edad: number = null;
  pais: string = null;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getJugador(this.route.snapshot.params['id']);
    this.jugadorForm = this.formBuilder.group({
      dni : [null, Validators.required],
      nombre : [null, Validators.required],
      apellidos : [null, Validators.required],
      fechaNacimiento : [null, Validators.required],
      edad : [null],
      pais : [null, Validators.required]
    });
  }

  getJugador(id) {
    this.api.getMiembro(id).subscribe(data => {
      this.id = data._id;
      this.jugadorForm.setValue({
        dni: data.dni,
        nombre: data.nombre,
        apellidos: data.apellidos,
        fechaNacimiento: data.fechaNacimiento,
        edad: data.edad,
        pais: data.pais
      });
    });
  }

  onFormSubmit(form: NgForm) {
    form['edad'] = this.api.calcularEdad(form['fechaNacimiento']);

    this.api.updateMiembro(this.id, form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/jugadores']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
