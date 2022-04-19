import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment.prod';
import { ResumoDados } from './../model/resumoDados';

@Injectable({
	providedIn: 'root'
})
export class ResumoCoreService {
	private URL_BASE: string = environment.url + 'resumo'

	constructor(private http: HttpClient) { }

	getResumo() {
		return this.http.get(this.URL_BASE);
	}
}
