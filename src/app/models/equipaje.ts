export class Equipaje {
  public tallaCamisa: string;
  public tallaPantalon: string;

  private constructor(d: any) {
    this.tallaCamisa = d.tallaCamisa;
    this.tallaPantalon = d.tallaPantalon;
  }
}
