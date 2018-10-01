import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatRadioModule,
  MatDialogModule,
  MatInputModule,
  MatSnackBarModule
 } from "@angular/material";
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatRadioModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule
  ],
  exports: [
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatRadioModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule
  ],
  declarations: []
})
export class SharedModule { }
