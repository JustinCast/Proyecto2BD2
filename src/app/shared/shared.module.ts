import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule} from 'ngx-pagination'
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
  MatSlideToggleModule,
  MatSelectModule
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
    MatSlideToggleModule,
    NgxPaginationModule,
    MatSelectModule
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
    MatSlideToggleModule,
    NgxPaginationModule,
    MatSelectModule
  ],
  declarations: []
})
export class SharedModule { }
