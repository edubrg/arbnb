import { ResumofacadeService } from './../../abstraction/resumofacade.service';
import { Component, OnInit } from '@angular/core';
import { ResumoDados } from '../../model/resumoDados';
import { take } from 'rxjs';

@Component({
  selector: 'app-resumoview',
  templateUrl: './resumoview.component.html',
  styleUrls: ['./resumoview.component.scss']
})
export class ResumoviewComponent implements OnInit {
  dados!: any;

  constructor(private resumoFacade: ResumofacadeService) { }

  ngOnInit(): void {
    console.log(this.dados);

    this.getResumo();
  }

  getResumo(): void {
    this.resumoFacade.getResumo().pipe(take(1)).subscribe({
      next: (res) => {
        this.dados = res;
      }
    });
  }
}
