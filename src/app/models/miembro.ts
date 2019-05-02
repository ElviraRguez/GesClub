import { Contacto } from './contacto';
import { Club } from './club';
import { Categoria } from './categoria';

export class Miembro {
  constructor(dni, nombre, apellidos, fechaNacimiento, edad, contacto, funcion, club, categoria, pais, observaciones){
    this.dni = dni;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fechaNacimiento = fechaNacimiento;
    this.edad = edad;
    this.funcion = funcion;
    this.pais = pais;
    this.observaciones = observaciones;
  }
  public dni: string;
  public nombre: string;
  public apellidos: string;
  public fechaNacimiento: string;
  public edad: number;
  public contacto: Contacto;
  public funcion: string;
  public club: Club;
  public categoria: Categoria;
  public pais: string;
  public observaciones: string;
}
