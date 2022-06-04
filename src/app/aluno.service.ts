import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Aluno } from './model/aluno';


@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  URL = 'http://localhost:3000/alunos';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll() : Promise<Aluno[]> {
    return firstValueFrom(this.httpClient.get<Aluno[]>(`${this.URL}/`));
  }

  getById(id: number): Promise<Aluno> {
    return firstValueFrom(this.httpClient.get<Aluno>(`${this.URL}/${id}`));
  }

  save(aluno: Aluno): Promise<Aluno> {
    return firstValueFrom(this.httpClient
      .post<Aluno>(
        this.URL,
        JSON.stringify(aluno),
        this.httpOptions
      ));
  }

  patch(aluno: Aluno): Promise<Aluno> {
    return firstValueFrom(this.httpClient
      .patch<Aluno>(
        this.URL,
        JSON.stringify(aluno),
        this.httpOptions
      ));
  }

  update(aluno: Aluno): Promise<Aluno> {
    return firstValueFrom(this.httpClient
      .put<Aluno>(`${this.URL}/${aluno.id}`, JSON.stringify(aluno), this.httpOptions));
  }

  delete(id: String): Promise<Aluno> {
    return firstValueFrom(this.httpClient
      .delete<Aluno>(`${this.URL}/${id}`, this.httpOptions));
  }

}
