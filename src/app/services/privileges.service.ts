import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UIUtilService } from './uiutil.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrivilegesService {
  schemas: Array<any> = [];
  constructor(
    private _http: HttpClient,
    private _ui: UIUtilService
  ) { }

  getSchemas() {
    this._http.get<any>(`${environment.SERVER_BASE_URL}getSchemas`)
    .subscribe(
      data => this.schemas = data,
      (err: HttpErrorResponse) => {
        this.errorHandler(err);
      }
    )
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
