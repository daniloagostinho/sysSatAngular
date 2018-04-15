import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FuncionarioComponent } from '../sys-sat/funcionario/funcionario.component';
import { EdificiosComponent } from '../sys-sat/edificios/edificios.component';
import { OrdemServicoComponent } from '../sys-sat/ordem-servico/ordem-servico.component';
import { OrcamentosComponent } from '../sys-sat/orcamentos/orcamentos.component';
import { RegistrarFuncionarioComponent } from '../sys-sat/funcionario/registrar-funcionario/registrar-funcionario.component';
import { EditarFuncionarioComponent } from '../sys-sat/funcionario/editar-funcionario/editar-funcionario.component';

const routes: Routes = [
  { path: 'funcionarios', component: FuncionarioComponent },
  { path: 'edificios', component: EdificiosComponent },
  { path: 'orcamentos', component: OrcamentosComponent },
  { path: 'registrar-funcionario', component: RegistrarFuncionarioComponent },
  { path: 'editar-funcionario', component: EditarFuncionarioComponent },
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule {

}
