import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ConnectionDialogComponent } from './connection-dialog/connection-dialog.component';
import { DialogManagerService } from './dialog-manager.service';

@NgModule({
  declarations: [
    AppComponent,
    ConnectionDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [DialogManagerService],
  entryComponents: [
    ConnectionDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
