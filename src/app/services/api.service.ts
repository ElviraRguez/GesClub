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

  private apiUrl = '/api';

  constructor(private http: HttpClient) { }

  getJugadores(): Observable<any> {
    return this.http.get(this.apiUrl, httpOptions)
                    .pipe(
                        map(this.extractData),
                        catchError(this.handleError)
                    );
  }

  getJugador(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url, httpOptions)
                    .pipe(
                      map(this.extractData),
                      catchError(this.handleError)
                    );
  }

  postJugador(data): Observable<any> {
    return this.http.post(this.apiUrl, data, httpOptions)
                    .pipe(
                      catchError(this.handleError)
                    );
  }

  updateJugador(data): Observable<any> {
    return this.http.put(this.apiUrl, data, httpOptions)
                    .pipe(
                      catchError(this.handleError)
                    );
  }

  deleteJugador(id: string): Observable<{}> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url, httpOptions)
                    .pipe(
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
