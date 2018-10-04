import { Component, OnInit } from '@angular/core';
import { PrivilegesService } from '../services/privileges.service';

@Component({
  selector: 'app-privileges',
  templateUrl: './privileges.component.html',
  styleUrls: ['./privileges.component.scss']
})
export class PrivilegesComponent implements OnInit {
  step = 0;
  innerStep = 0;
  constructor(private _privileges: PrivilegesService) { }

  ngOnInit() {
    this._privileges.getSchemas();
  }

  setStep(index: number) {
    this.step = index;
  }

  setInnerStep(index: number) {
    this.innerStep = index;
  }

  expandSchema(name: string, index: number) {
    if(!this._privileges.opened[index]){
      this._privileges.getTablesPrivileges(name);
    }
    this._privileges.opened[index] = !this._privileges.opened[index];
    this.closeOthers(index);
  }

  closeOthers(index: number) {
    for (let i = 0; i < this._privileges.opened.length; i++) {
      if(i !== index)
        this._privileges.opened[i] = false;
    }
  }

}
