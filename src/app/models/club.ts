import { Sede } from './sede';
import { Usuario } from './usuario';

export class Club {
  public nombre: string;
  public acronimo: string;
  public deporte: string;
  public sede: Sede;
  public web: string;
  public idUsuario: Usuario;

  private constructor(d: any) {
    this.nombre = d.nombre;
    this.acronimo = d.acronimo;
    this.deporte = d.deporte;
    this.sede = d.sede;
    this.web = d.web;
    this.idUsuario = d.idUsuario;
  }
}
