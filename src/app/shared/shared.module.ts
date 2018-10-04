import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatRadioModule,
  MatDialogModule,
  MatInputModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatProgressBarModule,
  MatTreeModule,
  MatTableModule
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
    MatSnackBarModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatTreeModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatRadioModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatTreeModule,
    MatTableModule
  ],
  declarations: []
})
export class SharedModule { }
