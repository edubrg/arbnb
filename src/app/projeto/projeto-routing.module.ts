import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaviewComponent } from './presentation/consultaview/consultaview.component';
import { FaturamentoviewComponent } from './presentation/faturamentoview/faturamentoview.component';
import { ResumoviewComponent } from './presentation/resumoview/resumoview.component';

const routes: Routes = [
	{
		component: ResumoviewComponent,
		path: 'resumo'
	},
  {
    component: FaturamentoviewComponent,
    path: 'faturamento'
  },
  {
    component: ConsultaviewComponent,
    path: 'consulta'
  },
  {
    component: ResumoviewComponent,
    path: ''
  }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProjetoRoutingModule {}
