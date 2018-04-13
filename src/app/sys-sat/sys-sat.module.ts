import { AppComponent } from './../app.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SysSatComponent } from './sys-sat.component';
import { EdificiosComponent } from './edificios/edificios.component';


@NgModule({
  imports: [
    CommonModule,
    AppComponent
  ],
  declarations: [SysSatComponent, EdificiosComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SysSatModule { }
