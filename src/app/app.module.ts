import { SysSatComponent } from './sys-sat/sys-sat.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FuncionarioComponent } from './sys-sat/funcionario/funcionario.component';
import { RoutesModule } from './routes/routes.module';


@NgModule({
  declarations: [
    AppComponent,
    FuncionarioComponent,
    SysSatComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
