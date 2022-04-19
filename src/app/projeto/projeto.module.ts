import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaviewComponent } from './presentation/consultaview/consultaview.component';
import { FaturamentoviewComponent } from './presentation/faturamentoview/faturamentoview.component';
import { ResumoviewComponent } from './presentation/resumoview/resumoview.component';
import { ProjetoRoutingModule } from './projeto-routing.module';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    ConsultaviewComponent,
    FaturamentoviewComponent,
    ResumoviewComponent
  ],
  imports: [
    CommonModule,
    ProjetoRoutingModule,
    MatCardModule,
    
  ]
})
export class ProjetoModule { }
