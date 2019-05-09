import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrlLogin = '/api/login';
  private apiUrlMiembro = '/api/miembro';
  private apiUrlClub = '/api/club';
  private apiUrlCategoria = '/api/categoria';

  constructor(private http: HttpClient) { }

  login(data): Observable<any> {
    return this.http.post(this.apiUrlLogin, data, httpOptions)
                        .pipe(
                          catchError(this.handleError)
                        );
  }

  getMiembros(): Observable<any> {
    return this.http.get(this.apiUrlMiembro, httpOptions)
                    .pipe(
                        map(this.extractData),
                        catchError(this.handleError)
                    );
  }

  getMiembro(id: string): Observable<any> {
    const url = `${this.apiUrlMiembro}/${id}`;
    return this.http.get(url, httpOptions)
                    .pipe(
                      map(this.extractData),
                      catchError(this.handleError)
                    );
  }

  postMiembro(data): Observable<any> {
    return this.http.post(this.apiUrlMiembro, data, httpOptions)
                    .pipe(
                      catchError(this.handleError)
                    );
  }

  updateMiembro(id: string, data): Observable<any> {
    const url = `${this.apiUrlMiembro}/${id}`;
    return this.http.put(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteMiembro(id: string): Observable<{}> {
    const url = `${this.apiUrlMiembro}/${id}`;
    return this.http.delete(url, httpOptions)
                    .pipe(
                      catchError(this.handleError)
                    );
  }

  calcularEdad(fecha) {
    const hoy = new Date();
    const cumpleanos = new Date(fecha);
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    const m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
  }

  getClubs(): Observable<any> {
    return this.http.get(this.apiUrlClub, httpOptions)
                    .pipe(
                        map(this.extractData),
                        catchError(this.handleError)
                    );
  }

  getCategorias(): Observable<any> {
    return this.http.get(this.apiUrlCategoria, httpOptions)
                    .pipe(
                        map(this.extractData),
                        catchError(this.handleError)
                    );
  }

  private extractData(res: Response) {
    return res || {};
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
}
