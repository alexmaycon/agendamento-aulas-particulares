import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Disciplina } from './model/disciplina';


@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  URL = 'http://localhost:3000/disciplinas';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll() : Promise<Disciplina[]> {
    return firstValueFrom(this.httpClient.get<Disciplina[]>(`${this.URL}/`));
  }

  getById(id: number): Promise<Disciplina> {
    return firstValueFrom(this.httpClient.get<Disciplina>(`${this.URL}/${id}`));
  }

  save(disciplina: Disciplina): Promise<Disciplina> {
    return firstValueFrom(this.httpClient
      .post<Disciplina>(
        this.URL,
        JSON.stringify(disciplina),
        this.httpOptions
      ));
  }

  patch(disciplina: Disciplina): Promise<Disciplina> {
    return firstValueFrom(this.httpClient
      .patch<Disciplina>(
        this.URL,
        JSON.stringify(disciplina),
        this.httpOptions
      ));
  }

  update(disciplina: Disciplina): Promise<Disciplina> {
    return firstValueFrom(this.httpClient
      .put<Disciplina>(`${this.URL}/${disciplina.id}`, JSON.stringify(disciplina), this.httpOptions));
  }

  delete(id: String): Promise<Disciplina> {
    return firstValueFrom(this.httpClient
      .delete<Disciplina>(`${this.URL}/${id}`, this.httpOptions));
  }

}

