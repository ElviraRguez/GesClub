export class Usuario {
  public _id: string;
  public email: string;
  public contraseña: string;
  public nombre: string;
  public telefono: number;

  public constructor(d: any) {
    this._id = d._id;
    this.email = d.email;
    this.contraseña = d.contraseña;
    this.nombre = d.nombre;
    this.telefono = d.telefono;
  }
}
