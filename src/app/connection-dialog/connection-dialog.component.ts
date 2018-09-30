import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Connection } from "../models/Connection";
import { ConnService } from "../services/conn.service";
import { HttpErrorResponse } from "@angular/common/http";

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
    private _conn: ConnService
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
  }

  makeLoginRequest() {
    this._conn.login(this.connection)
    .subscribe(
      () => {
        this._conn.actualConnections.unshift(this.connection);
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
