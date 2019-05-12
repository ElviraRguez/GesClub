import { Component, OnInit } from '@angular/core';

export interface matchTable {
  fecha: string;
  hora: string;
  local: string;
  visitante: string;
  campo: string;
}

const ELEMENT_DATA: matchTable[] = [
  {fecha: '26-05-2019', hora: '12:30', local: 'Juvenil A', visitante: 'UD Orotava', campo: 'Las Torres de Taco'},
  {fecha: '25-05-2019', hora: '12:30', local: 'Juvenil B', visitante: 'AD Laguna B', campo: 'Las Torres de Taco'},
  {fecha: '25-05-2019', hora: '12:00', local: 'CD Tenerife B', visitante: 'Cadete', campo: 'Ciudad deportiva de Geneto'},
  {fecha: '25-05-2019', hora: '11:30', local: 'At. Rocio', visitante: 'Infantil A', campo: 'Perico Vargas'},
  {fecha: '26-05-2019', hora: '12:00', local: 'Valeriana A', visitante: 'Infantil B', campo: 'El Chorrillo'},
  {fecha: '26-05-2019', hora: '10:30', local: 'Alevín A', visitante: 'Coromoto', campo: 'Las Torres de Taco'},
  {fecha: '25-05-2019', hora: '11:00', local: 'Alevín B', visitante: 'Padre Anchieta', campo: 'Las Torres de Taco'},
  {fecha: '26-05-2019', hora: '10:30', local: 'Juv. Laguna A', visitante: 'Benjamin A', campo: 'Anexo Francisco Peraza'},
  {fecha: '25-05-2019', hora: '10:00', local: 'Benjamin B', visitante: 'UD Taco San Luis', campo: 'Las Torres de Taco'},
  {fecha: '26-05-2019', hora: '9:30', local: 'Prebenjamin', visitante: 'UD Campana', campo: 'Las Torres de Taco'},
];

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['fecha', 'hora', 'local', 'visitante', 'campo'];
  dataSource = ELEMENT_DATA;

}
