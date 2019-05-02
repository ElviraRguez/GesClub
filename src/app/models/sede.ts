export class Sede {
  public nombre: string;
  public direccion: string;

  private constructor(d: any) {
    this.nombre = d.nombre;
    this.direccion = d.direccion;
  }
}
