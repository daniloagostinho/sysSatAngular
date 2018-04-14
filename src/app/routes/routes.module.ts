import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FuncionarioComponent } from '../sys-sat/funcionario/funcionario.component';
import { EdificiosComponent } from '../sys-sat/edificios/edificios.component';
import { OrdemServicoComponent } from '../sys-sat/ordem-servico/ordem-servico.component';
import { OrcamentosComponent } from '../sys-sat/orcamentos/orcamentos.component';

const routes: Routes = [
  { path: 'funcionarios', component: FuncionarioComponent },
  { path: 'edificios', component: EdificiosComponent },
  { path: 'orcamentos', component: OrcamentosComponent },
  { path: 'ordem-servicos', component: OrdemServicoComponent },
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule {

}
