export class Contacto {
  public email: string;
  public telefono: number;
  public direccion: string;

  private constructor(d: any) {
    this.email = d.email;
    this.telefono = d.telefono;
    this.direccion = d.direccion;
  }
}
