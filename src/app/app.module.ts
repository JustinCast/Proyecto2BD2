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
import { QueryDialogComponent } from './query-dialog/query-dialog.component';

@NgModule({
  declarations: [AppComponent, ConnectionDialogComponent, QueryDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DialogManagerService, UIUtilService],
  entryComponents: [
    ConnectionDialogComponent,
    QueryDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
