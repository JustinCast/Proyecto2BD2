import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { ConnectionDialogComponent } from "./connection-dialog/connection-dialog.component";

@Injectable({
  providedIn: "root"
})
export class DialogManagerService {
  constructor(public dialog: MatDialog) {}

  openNewConnectionDialog() {
    let dialogRef: MatDialogRef<ConnectionDialogComponent> = this.dialog.open(
      ConnectionDialogComponent,
      {
        width: "25%",
        height: "70%",
        panelClass: 'dialog'
        // data
      }
    );
    return dialogRef.afterClosed();
  }
}
