import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { UIUtilService } from "./uiutil.service";
import { environment } from "../../environments/environment";
import { Connection } from "../models/Connection";
import { Table } from "../models/Table";
import { TableInterface } from "./Table.interface";

@Injectable({
	providedIn: "root"
})
export class PrivilegesService {
	schemas: Array<any> = [];
	tablePrivileges: Array<Table> = [];
	connection: Connection;
	constructor(private _http: HttpClient, private _ui: UIUtilService) {}

	getSchemas() {
		this._http.get<any>(`${environment.SERVER_BASE_URL}getSchemas`).subscribe(
			data => (this.schemas = data),
			(err: HttpErrorResponse) => {
				this.errorHandler(err);
			}
		);
	}

	getTablesPrivileges(name: string) {
		this.tablePrivileges = [];
		this._http
			.get<TableInterface[]>(
				`${environment.SERVER_BASE_URL}getTablePrivileges/${
					this.connection.user
				}/${name}`
			)
			.subscribe(
				data => this.extractTables(data),
				(err: HttpErrorResponse) => {
					this.errorHandler(err);
				}
			);
	}

	extractTables(tables: Array<TableInterface>) {
		tables.forEach(element => {
			if (
				this.tablePrivileges.find(t => t.t_name === element.t_name) !== undefined
			) {
				this.tablePrivileges
					.find(t => t.t_name === element.t_name)
					.setPrivilege(element.privilege);
			} else {
				let table = new Table(element.t_name);
				table.setPrivilege(element.privilege);
				this.tablePrivileges.unshift(table);
			}
		});
		console.log(this.tablePrivileges);
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
