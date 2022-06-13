import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Aula } from './model/aula';

@Injectable({
  providedIn: 'root'
})
export class AulaService {

  URL = 'http://localhost:3000/aulas';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll() : Observable<Aula[] | undefined> {
    return this.httpClient.get<Aula[]>(`${this.URL}/`);
  }

  getById(id: string): Observable<Aula> {
    return this.httpClient.get<Aula>(`${this.URL}/${id}`);
  }

  save(aula: Aula): Observable<Aula> {
    return this.httpClient
      .post<Aula>(
        this.URL,
        JSON.stringify(aula),
        this.httpOptions
      );
  }

  patch(aula: Aula): Observable<Aula> {
    return this.httpClient
      .patch<Aula>(
        this.URL,
        JSON.stringify(aula),
        this.httpOptions
      );
  }

  update(aula: Aula): Observable<Aula> {
    return this.httpClient
      .put<Aula>(`${this.URL}/${aula.id}`, JSON.stringify(aula), this.httpOptions);
  }

  delete(id: String): Observable<Aula> {
    return this.httpClient
      .delete<Aula>(`${this.URL}/${id}`, this.httpOptions);
  }

}
