import { Component, OnInit } from '@angular/core';
import { AlunoService } from 'src/app/aluno.service';
import { Aluno } from 'src/app/model/aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  alunos?: Aluno[];

  constructor(private alunoService: AlunoService) { }

  ngOnInit(): void {
    this.alunoService.getAll().subscribe(
      {
        next: (alunos: Aluno[]) => {
            this.alunos = alunos;
        },
        error: () => {
          console.log('Erro ao obter alubos');
        }
      }
    );
  }

  onDelete(codigo: string) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover o aluno com código (' + codigo+")?"
    );
    if (!confirmation) {
      return;
    }
    this.alunoService.delete(codigo).subscribe(
      {
        complete: () => {
            this.alunoService.getAll().subscribe(
              {
                next: (alunos: Aluno[]) => {
                    this.alunos = alunos;
                  },
                error: () => {
                  console.log('Erro ao obter alubos');
                }
              }
            );
          },
        error: () => {
          alert("Erro ao deletar aluno "+codigo);
        }
      }
    );
  }

}
