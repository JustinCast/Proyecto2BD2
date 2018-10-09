import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { UIUtilService } from "./uiutil.service";
import { environment } from "../../environments/environment";
import { Connection } from "../models/Connection";
import { ColumnInterface } from "./Column.interface";
import { Col } from "../models/Col";
import { List } from "linqts";
@Injectable({
	providedIn: "root"
})
export class ExecuteQueryService {
	columns: Array<Col> = [];
	names: Array<string> = [];
	connection: Connection;

	constructor(private _http: HttpClient, private _ui: UIUtilService) {}

	executeQuery(information: string, connString: string) {
		this._http
			.post<any[]>(`${environment.SERVER_BASE_URL}executeQuery`, {
				information: information,
				connString: connString
			})
			.subscribe(
				data => {
					this.extractColsNames(data["fields"]);
					//console.log(data);
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
		names.forEach(name => {
			this.columns.unshift(new Col(name.name));
			this.names.push(name.name);
		});
	}

	extractColumns(cols: any) {
		this.columns.forEach(c => {
			for (let index = 0; index < cols["rows"].length; index++) {
				var keys = Object.keys(cols["rows"][index]);
				for (var k in keys) {
					if (keys[k] === c.name) c.setValue(cols["rows"][index][keys[k]]);
				}
			}
			console.log(c.values);
		});
	}
}
