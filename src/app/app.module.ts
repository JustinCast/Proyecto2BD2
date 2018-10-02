import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./shared/shared.module";
import { ConnectionDialogComponent } from "./connection-dialog/connection-dialog.component";
import { DialogManagerService } from "./dialog-manager.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { UIUtilService } from "./services/uiutil.service";
import { PrivilegesComponent } from './privileges/privileges.component';

@NgModule({
  declarations: [AppComponent, ConnectionDialogComponent, PrivilegesComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DialogManagerService, UIUtilService],
  entryComponents: [ConnectionDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
