import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Usuario } from '../models/usuario';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrlAuth = '/api/login';

  constructor(private http: HttpClient) { }

  login(data): Observable<any> {
    return this.http.post(this.apiUrlAuth, data, httpOptions)
                        .pipe(
                          map(user => {
                            const u = new Usuario(user);
                            localStorage.setItem('currentUser', JSON.stringify({token: u._id, name: u.nombre})); //
                          }),
                          catchError(this.handleError)
                        );
  }

  logout() {
    localStorage.removeItem('currentUser');
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
