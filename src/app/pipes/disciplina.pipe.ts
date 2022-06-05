import { Pipe, PipeTransform } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { DisciplinaService } from '../disciplina.service';

@Pipe({
  name: 'disciplina'
})
export class DisciplinaPipe implements PipeTransform {

  constructor(private disciplinaService: DisciplinaService) { }

   async transform(value: string): Promise<string> {
    let disciplina = await firstValueFrom(this.disciplinaService.getById(value));
    return disciplina.id+"-"+disciplina.descricao;
  }

}
