import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
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

  getAll() : Promise<Aula[] | undefined> {
    return firstValueFrom(this.httpClient.get<Aula[]>(`${this.URL}/`));
  }

  getById(id: number): Promise<Aula> {
    return firstValueFrom(this.httpClient.get<Aula>(`${this.URL}/${id}`));
  }

  save(aula: Aula): Promise<Aula> {
    return firstValueFrom(this.httpClient
      .post<Aula>(
        this.URL,
        JSON.stringify(aula),
        this.httpOptions
      ));
  }

  patch(aula: Aula): Promise<Aula> {
    return firstValueFrom(this.httpClient
      .patch<Aula>(
        this.URL,
        JSON.stringify(aula),
        this.httpOptions
      ));
  }

  update(aula: Aula): Promise<Aula> {
    return firstValueFrom(this.httpClient
      .put<Aula>(`${this.URL}/${aula.id}`, JSON.stringify(aula), this.httpOptions));
  }

  delete(id: String): Promise<Aula> {
    return firstValueFrom(this.httpClient
      .delete<Aula>(`${this.URL}/${id}`, this.httpOptions));
  }

}
