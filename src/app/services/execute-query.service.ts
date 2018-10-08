import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { UIUtilService } from "./uiutil.service";
import { environment } from "../../environments/environment";
import { Connection } from "../models/Connection";
import { ColumnInterface } from "./Column.interface";
import { Col } from "../models/Col";
import { List } from 'linqts';
@Injectable({
	providedIn: "root"
})
export class ExecuteQueryService{
	columns: Array<Col> = [];
	colsNames: Array<string> = [];
    connection: Connection;

    constructor(private _http: HttpClient, private _ui: UIUtilService) {}

    executeQuery(information: string) {
		this._http.get<ColumnInterface[]>(`${environment.SERVER_BASE_URL}executeQuery/${information}`)
		.subscribe(
			data => {
				extractColsNames(data.)
				console.log(data);
				this.extractColumns(data);
				//console.log(this.namesColumns);
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

	extractColsNames(names: Array<any>) {

	}

	extractColumns(cols: List<ColumnInterface>) {
		this.columns = cols.GroupBy(t => pet, t === Object.keys(cols[0]));
	}

}