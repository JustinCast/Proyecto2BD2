import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";
import { ConnectionDialogComponent } from "./connection-dialog/connection-dialog.component";
import { Connection } from "./models/Connection";
import { QueryDialogComponent } from "./query-dialog/query-dialog.component";

@Injectable({
  providedIn: "root"
})
export class DialogManagerService {
  constructor(public dialog: MatDialog) {}

  openNewConnectionDialog(connection: Connection) {
    let dialogRef: MatDialogRef<ConnectionDialogComponent> = this.dialog.open(
      ConnectionDialogComponent,
      {
        width: "25%",
        height: "75%",
        panelClass: 'dialog',
        data: connection
      }
    );
    return dialogRef.afterClosed();
  }

  openQueryDialog(){
    let dialogRef: MatDialogRef<QueryDialogComponent> = this.dialog.open(
      QueryDialogComponent, {
      width: "60%",
      height: "auto",
      panelClass: 'dialog',
      }
    );
    return dialogRef.afterClosed();
  }

}
