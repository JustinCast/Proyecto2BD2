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
 
  contenido=['Luis carlos','conzalez','18','2016140241','20114455','3000','Luis carlos','conzalez','18','2016140241','20114455','3000','Luis carlos','conzalez','18','2016140241','20114455','3000','Luis carlos','conzalez','18','2016140241','20114455','3000','Luis carlos','conzalez','18','2016140241','20114455','3000'];
  p: number = 1;

  ngOnInit() {}

  runQuery(){
    var textArea = <HTMLInputElement> document.getElementById("queryTextArea");
    this._executionQuery.executeQuery(textArea.value);
    console.log("imprime"+this._executionQuery.elements);
  }

  getConn(conn: Connection) {
    let connection= "host="+conn.server+" user="+conn.user+" password="+conn.password+" dbname="+conn.database;
    var textArea = <HTMLInputElement> document.getElementById("queryTextArea");
    textArea.value+="select dblink_connect('"+connection+"',' ');";
  }

  message(message:string, action: string, dur:number) {
    this.snackBar.open(message, action, {
      duration: dur,
    });
  }
}
