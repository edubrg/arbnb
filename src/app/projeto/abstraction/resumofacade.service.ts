import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ResumoCoreService } from '../core/resumocore.service'
import { ResumoDados } from '../model/resumoDados';

@Injectable({
  providedIn: 'root'
})
export class ResumofacadeService {

  constructor(private resumoDadosService: ResumoCoreService) { }

  getResumo() {
    return this.resumoDadosService.getResumo();
  }
}
