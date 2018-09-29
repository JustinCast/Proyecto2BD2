import { Component } from "@angular/core";
import { MatIcon, MatRadioChange, MatRadioButton } from "@angular/material";
import { DialogManagerService } from "./dialog-manager.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private _dialogManager: DialogManagerService) {}

  newConn() {
    this._dialogManager.openNewConnectionDialog();
  }

  activeConn() {}
}
