import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatButtonModule,
  MatListModule,
  MatIconModule
 } from "@angular/material";
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatListModule,
    MatIconModule
  ],
  declarations: []
})
export class SharedModule { }
