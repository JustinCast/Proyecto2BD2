import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatRadioModule,
  MatDialogModule
 } from "@angular/material";
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatRadioModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatRadioModule,
    MatDialogModule
  ],
  declarations: []
})
export class SharedModule { }
