import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { UIUtilService } from "./uiutil.service";
import { environment } from "../../environments/environment";
import { Connection } from "../models/Connection";

@Injectable({
	providedIn: "root"
})
export class ExecuteQueryService{
    elements: Array<any> = [];
    connection: Connection;

    constructor(private _http: HttpClient, private _ui: UIUtilService) {}

    executeQuery() {
		this._http.get<any>(`${environment.SERVER_BASE_URL}executeQuery`).subscribe(
			data => {
				this.elements = data;
			},
			(err: HttpErrorResponse) => {
				this.errorHandler(err);
			}
		);
    }
    
    errorHandler(err: HttpErrorResponse) {
		if (err.error instanceof Error) {
			console.log("An error occurred:", err.error.message);
		} else {
			console.log(
				`Backend returned code ${err.status}, body was: ${JSON.stringify(
					err.error
				)}`
			);
		}
	}

}