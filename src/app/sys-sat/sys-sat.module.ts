import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SysSatComponent } from './sys-sat.component';
import { EdificiosComponent } from './edificios/edificios.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SysSatComponent, EdificiosComponent]
})
export class SysSatModule { }
