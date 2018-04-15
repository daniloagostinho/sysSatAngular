import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sys-sat',
  templateUrl: './sys-sat.component.html',
  styleUrls: ['./sys-sat.component.scss']
})
export class SysSatComponent implements OnInit {

  mode = new FormControl('side');

  sidenavContentDisabled = false;

  constructor() { }

  ngOnInit() {
  }

  disableNavToggle(status: boolean){
    this.sidenavContentDisabled = status;
  }

}
