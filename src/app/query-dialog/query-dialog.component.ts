import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { ExecuteQueryService } from '../services/execute-query.service';

@Component({
  selector: 'app-query-dialog',
  templateUrl: './query-dialog.component.html',
  styleUrls: ['./query-dialog.component.scss']
})

export class QueryDialogComponent implements OnInit {
 
  
  constructor(
    public dialogRef: MatDialogRef<QueryDialogComponent>,
    public snackBar: MatSnackBar,
    private _executionQuery: ExecuteQueryService
  ) { }
 
  contenido=['Luis carlos','conzalez','18','2016140241','20114455','3000','Luis carlos','conzalez','18','2016140241','20114455','3000','Luis carlos','conzalez','18','2016140241','20114455','3000','Luis carlos','conzalez','18','2016140241','20114455','3000','Luis carlos','conzalez','18','2016140241','20114455','3000'];
  p: number = 1;
  elements=this._executionQuery.elements;

  ngOnInit() {
    
  }

  availableWriteQuery(){
    var textArea = <HTMLInputElement> document.getElementById("queryTextArea");
    var button = <HTMLInputElement> document.getElementById("queryButton");
    if(textArea.disabled===true || button.disabled===true){
      textArea.disabled=false;
      button.disabled=false;
    }else{
      textArea.disabled=true;
      button.disabled=true;
    }
  }

  runQuery(){
    var textArea = <HTMLInputElement> document.getElementById("queryTextArea");
    var isSelect=textArea.value.split(' ');
    if(isSelect[0]==='Select' || isSelect[0]==='SELECT' || isSelect[0]==='select'){
      this._executionQuery.executeQuery();
    }
    else
    {
      this.message("Only selects are allowed","Close",3000);
      textArea.value="  ";
    }
    
  }

  message(message:string, action: string, dur:number) {
    this.snackBar.open(message, action, {
      duration: dur,
    });
  }
  
}
