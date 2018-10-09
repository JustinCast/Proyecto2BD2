import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA, MatOption } from '@angular/material';
import { ExecuteQueryService } from '../services/execute-query.service';
import { Connection } from '../models/Connection';

@Component({
  selector: 'app-query-dialog',
  templateUrl: './query-dialog.component.html',
  styleUrls: ['./query-dialog.component.scss']
})

export class QueryDialogComponent implements OnInit {
  writeQuery: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<QueryDialogComponent>,
    public snackBar: MatSnackBar,
    private _executionQuery: ExecuteQueryService,
    @Inject(MAT_DIALOG_DATA) public connections: Array<Connection>,
  ) { }
 
  p: number = 1;

  ngOnInit() {}

  runQuery(){
    var textArea = <HTMLInputElement> document.getElementById("queryTextArea");
    this._executionQuery.executeQuery(textArea.value);
    //console.log("imprime"+this._executionQuery.elements);

  }

  getConn(conn: Connection) {
    let connection= "host="+conn.server+" user="+conn.user+" password="+conn.password+" dbname="+conn.database;
    var textArea = <HTMLInputElement> document.getElementById("queryTextArea");
    textArea.value+="select dblink_connect('conn', '"+connection+"');";
    textArea.value += "\n\n SELECT * FROM dblink('conn', ' ') as table_name( );"
  }

  message(message:string, action: string, dur:number) {
    this.snackBar.open(message, action, {
      duration: dur,
    });
  }
}
