import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FuncionarioComponent } from '../sys-sat/funcionario/funcionario.component';

const routes: Routes = [
  { path: 'funcionario', component: FuncionarioComponent }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule {

}
