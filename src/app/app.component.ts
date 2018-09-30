import { Component } from "@angular/core";
import { MatIcon, MatRadioChange, MatRadioButton } from "@angular/material";
import { DialogManagerService } from "./dialog-manager.service";
import { Connection } from "./models/Connection";
import { ConnService } from "./services/conn.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(
    private _dialogManager: DialogManagerService,
    private conn: ConnService
  ) {}

  newConn() {
    this._dialogManager
      .openNewConnectionDialog(new Connection("", "", 0, "", "", ""));
  }

  activeConn() {}
}
