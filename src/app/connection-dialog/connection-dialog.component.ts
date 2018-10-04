import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Connection } from "../models/Connection";
import { ConnService } from "../services/conn.service";
import { HttpErrorResponse } from "@angular/common/http";
import { UIUtilService } from "../services/uiutil.service";

@Component({
  selector: "app-connection-dialog",
  templateUrl: "./connection-dialog.component.html",
  styleUrls: ["./connection-dialog.component.scss"]
})
export class ConnectionDialogComponent implements OnInit {
  loginFG: FormGroup;
  icon = "priority_high";
  constructor(
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<ConnectionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public connection: Connection,
    private _conn: ConnService,
    private _ui: UIUtilService
  ) {
    this.loginFG = this._fb.group({
      name: ["", Validators.required],
      server: ["", Validators.required],
      database: ["", Validators.required],
      user: ["", Validators.required],
      password: ["", Validators.required],
      port: ["", Validators.required]
    });
  }

  ngOnInit() {
    this.loginFG.valueChanges.subscribe(() => {
      if (this.loginFG.valid) this.icon = "done";
      else this.icon = "priority_high";
    });
  }

  onSubmit() {
    this.connection.name = this.loginFG.get("name").value;
    this.connection.server = this.loginFG.get("server").value;
    this.connection.port = this.loginFG.get("port").value;
    this.connection.database = this.loginFG.get("database").value;
    this.connection.user = this.loginFG.get("user").value;
    this.connection.password = this.loginFG.get("password").value;
    this.makeLoginRequest();
  }

  makeLoginRequest() {
    this._conn.login(this.connection)
    .subscribe(
      (conn) => {
        this._conn.actualConnections.unshift(this.connection);
        this._conn.saveSession(this.connection);
        this._ui.openSnackBar('Connection created successfully', 'Ok');
      },
      (err: HttpErrorResponse) => {
        this._conn.errorHandler(err);
      }

    )
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
