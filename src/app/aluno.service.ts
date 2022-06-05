import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
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

  getAll() : Observable<Aluno[]> {
    return this.httpClient.get<Aluno[]>(`${this.URL}/`);
  }

  getById(id: string): Observable<Aluno> {
    return this.httpClient.get<Aluno>(`${this.URL}/${id}`);
  }

  save(aluno: Aluno): Observable<Aluno> {
    return this.httpClient
      .post<Aluno>(
        this.URL,
        JSON.stringify(aluno),
        this.httpOptions
      );
  }

  patch(aluno: Aluno): Observable<Aluno> {
    return this.httpClient
      .patch<Aluno>(
        this.URL,
        JSON.stringify(aluno),
        this.httpOptions
      );
  }

  update(aluno: Aluno): Observable<Aluno> {
    return this.httpClient
      .put<Aluno>(`${this.URL}/${aluno.id}`, JSON.stringify(aluno), this.httpOptions);
  }

  delete(id: String): Observable<Aluno> {
    return this.httpClient
      .delete<Aluno>(`${this.URL}/${id}`, this.httpOptions);
  }

}
