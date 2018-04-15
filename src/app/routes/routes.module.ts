import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FuncionarioComponent } from '../sys-sat/funcionario/funcionario.component';
import { EdificiosComponent } from '../sys-sat/edificios/edificios.component';
import { OrdemServicoComponent } from '../sys-sat/ordem-servico/ordem-servico.component';
import { OrcamentosComponent } from '../sys-sat/orcamentos/orcamentos.component';
import { RegistrarFuncionarioComponent } from '../sys-sat/funcionario/registrar-funcionario/registrar-funcionario.component';
import { EditarFuncionarioComponent } from '../sys-sat/funcionario/editar-funcionario/editar-funcionario.component';
import { EditarEdificioComponent } from '../sys-sat/edificios/editar-edificio/editar-edificio.component';
import { RegistrarEdificiosComponent } from '../sys-sat/edificios/registrar-edificios/registrar-edificios.component';
import { RegistrarOrcamentosComponent } from '../sys-sat/orcamentos/registrar-orcamentos/registrar-orcamentos.component';
import { EditarOrcamentosComponent } from '../sys-sat/orcamentos/editar-orcamentos/editar-orcamentos.component';
import { RegistrarOrdemServicoComponent } from '../sys-sat/ordem-servico/registrar-ordem-servico/registrar-ordem-servico.component';
import { EditarOrdemServicoComponent } from '../sys-sat/ordem-servico/editar-ordem-servico/editar-ordem-servico.component';

const routes: Routes = [
  { path: 'funcionarios', component: FuncionarioComponent },
  { path: 'edificios', component: EdificiosComponent },
  { path: 'orcamentos', component: OrcamentosComponent },
  { path: 'ordem-servico', component: OrcamentosComponent },
  { path: 'registrar-funcionario', component: RegistrarFuncionarioComponent },
  { path: 'editar-funcionario', component: EditarFuncionarioComponent },
  { path: 'registrar-edificio', component: RegistrarEdificiosComponent },
  { path: 'editar-edificio', component: EditarEdificioComponent },
  { path: 'registrar-orcamento', component: RegistrarOrcamentosComponent },
  { path: 'editar-orcamento', component: EditarOrcamentosComponent },
  { path: 'registrar-ordem-servico', component: RegistrarOrdemServicoComponent },
  { path: 'editar-ordem-servico', component: EditarOrdemServicoComponent },
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule {

}
