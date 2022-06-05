import { AlunoService } from 'src/app/aluno.service';
import { Pipe, PipeTransform } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Pipe({
  name: 'aluno'
})
export class AlunoPipe implements PipeTransform {

  constructor(private alunoService: AlunoService) { }

  async transform(value: string): Promise<string> {
    let aluno = await firstValueFrom(this.alunoService.getById(value));
    return aluno.id+"-"+aluno.nomeCompleto;
  }

}
