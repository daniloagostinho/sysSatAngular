import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FuncionarioComponent } from '../sys-sat/funcionario/funcionario.component';
import { EdificiosComponent } from '../sys-sat/edificios/edificios.component';

const routes: Routes = [
  { path: 'funcionarios', component: FuncionarioComponent },
  { path: 'edificios', component: EdificiosComponent },
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule {

}
