import { Aula } from 'src/app/model/aula';
import { Injectable } from '@angular/core';
import { WebStorageUtil } from 'src/app/utils/web-storage-util';

@Injectable({
  providedIn: 'root',
})
export class AulaService {

  public static readonly AULAS_KEY = 'users';

  aulas!: Aula[];
  constructor() {
    this.aulas = WebStorageUtil.get("aulas");
  }

  save(aula: Aula) {
    this.aulas = WebStorageUtil.get(AulaService.AULAS_KEY);
    this.aulas.push(aula);
    WebStorageUtil.set(AulaService.AULAS_KEY, this.aulas);
  }

  update(aula: Aula) {
    this.aulas = WebStorageUtil.get(AulaService.AULAS_KEY);
    this.delete(aula.id);
    this.save(aula);
  }

  delete(codigo: string): boolean {
    this.aulas = WebStorageUtil.get(AulaService.AULAS_KEY);
    this.aulas = this.aulas.filter((u) => {
      return u.id?.valueOf() != codigo?.valueOf();
    });

    WebStorageUtil.set(AulaService.AULAS_KEY, this.aulas);
    return true;
  }

  isExist(value: string): boolean {
    this.aulas = WebStorageUtil.get(AulaService.AULAS_KEY);
    if (this.aulas) {
      for (let u of this.aulas) {
        if (u.id?.valueOf() == value?.valueOf()) {
          return true;
        }
      }
    }
    return false;
  }

  getAula(codigo: string): Aula | null {
    this.aulas = WebStorageUtil.get(AulaService.AULAS_KEY);
    for (let u of this.aulas) {
      if (u.id?.valueOf() == codigo?.valueOf()) {
        return u;
      }
    }
    return null;
  }

  getAulas(): Aula[] {
    this.aulas = WebStorageUtil.get(AulaService.AULAS_KEY);
    return this.aulas;
  }
}
