import { Component, OnInit } from '@angular/core';
import { PrivilegesService } from '../services/privileges.service';

@Component({
  selector: 'app-privileges',
  templateUrl: './privileges.component.html',
  styleUrls: ['./privileges.component.scss']
})
export class PrivilegesComponent implements OnInit {
  opened: boolean = false;
  constructor(private _privileges: PrivilegesService) { }

  ngOnInit() {
    this._privileges.getSchemas();
  }

  expandSchema(name: string) {
    console.log(name);
    if(!this.opened){
      this._privileges.getTablesPrivileges();
    }
    this.opened = !this.opened;
  }

}
