import { Injectable } from '@angular/core';
import { Connection } from '../models/Connection';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnService {
  public actualConnections: Array<Connection> = [];
  constructor(private _http: HttpClient) { }

  login(conn: Connection): Observable<any>  {
    let connString = `postgres://${conn.user}:${conn.password}@${
      conn.server
    }:${conn.port}/${conn.database}?ssl=false`;
    console.log(connString);
    return this._http.post(`${environment.SERVER_BASE_URL}login`, {conn: connString})
  }

  errorHandler(err: HttpErrorResponse) {
    if (err.error instanceof Error) {
      // Error del lado del cliente
      console.log("An error occurred:", err.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // Error del lado del backend
      console.log(
        `Backend returned code ${err.status}, body was: ${JSON.stringify(
          err.error
        )}`
      );
    }

  }
}
