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
  MatTableModule,
  MatSlideToggleModule
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
    MatTableModule,
    MatSlideToggleModule
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
    MatTableModule,
    MatSlideToggleModule
  ],
  declarations: []
})
export class SharedModule { }
