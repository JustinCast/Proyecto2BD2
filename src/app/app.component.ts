import { Component, OnInit } from "@angular/core";
import { MatCheckbox } from "@angular/material";
import { DialogManagerService } from "./dialog-manager.service";
import { Connection } from "./models/Connection";
import { ConnService } from "./services/conn.service";
import { PrivilegesService } from "./services/privileges.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(
    private _dialogManager: DialogManagerService,
    private conn: ConnService,
    private _privilegeService: PrivilegesService
  ) {}

  ngOnInit(){
    /*if(this.conn.isLoggedIn())
      this.conn.actualConnections.unshift(this.conn.getConn());*/
  }

  newConn() {
    this._dialogManager
      .openNewConnectionDialog(new Connection("", "", 0, "", "", ""));
  }

  activeConn(checkbox: MatCheckbox) {
    this._privilegeService.connection = checkbox.value as Connection;
  }

  openQueryDialog(){
    this._dialogManager
    .openQueryDialog(this.conn.actualConnections);
  }
}
