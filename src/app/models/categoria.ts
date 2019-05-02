// Stores the currently-being-typechecked object for error messages.
let obj: any = null;
export class Categoria {
  public _id: string;
  public nombre: string;
  public club: string;

  private constructor(d: any) {
    this._id = d._id;
    this.nombre = d.nombre;
    this.club = d.club;
  }
}
