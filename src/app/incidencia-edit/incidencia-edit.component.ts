import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-incidencia-edit',
  templateUrl: './incidencia-edit.component.html',
  styleUrls: ['./incidencia-edit.component.css']
})
export class IncidenciaEditComponent implements OnInit {

  incidenciaForm: FormGroup;
  id: string=null;
  asunto: string=null;
  fechaInicio: Date=null;
  fechaFin: Date=null;
  detalle: string= null;
  
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getIncidencia(this.route.snapshot.params['id']);
    this.incidenciaForm = this.formBuilder.group({
      asunto: [null],
      fechaInicio: [null,Validators.required],
      fechaFin: [null],
      detalle: [null,Validators.required]
    });
  }

  getIncidencia(id){
    this.api.getIncidencia(id).subscribe(data => {
      this.id= data._id;
      this.incidenciaForm.setValue({
        asunto: data.asunto,
        fechaInicio: data.fechaInicio,
        fechaFin: data.fechaFin,
        detalle: data.detalle,
      });
    });
  }

  onFormSubmit(form: NgForm) {
    
    this.api.updateIncidencia(this.id, form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/incidencias']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
