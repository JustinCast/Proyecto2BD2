import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-query-dialog',
  templateUrl: './query-dialog.component.html',
  styleUrls: ['./query-dialog.component.scss']
})
export class QueryDialogComponent implements OnInit {
  
  constructor(public dialogRef: MatDialogRef<QueryDialogComponent>) { }
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
    console.log(textArea.value); 
  }

}
