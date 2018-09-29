import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-connection-dialog",
  templateUrl: "./connection-dialog.component.html",
  styleUrls: ["./connection-dialog.component.scss"]
})
export class ConnectionDialogComponent implements OnInit {
  loginFG: FormGroup;
  icon = "priority_high";
  constructor(private _fb: FormBuilder) {
    this.loginFG = this._fb.group({
      server: ["", Validators.required],
      database: ["", Validators.required],
      user: ["", Validators.required],
      password: ["", Validators.required],
      port: ["", Validators.required]
    });
  }

  ngOnInit() {
    this.loginFG.valueChanges.subscribe(() => {
      if (this.loginFG.invalid == false) this.icon = "done";
      else this.icon = "priority_high";
    });
  }
}
