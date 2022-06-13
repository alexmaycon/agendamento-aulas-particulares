import { Disciplina } from './../../model/disciplina';
import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from 'src/app/disciplina.service';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {

  disciplinas?: Disciplina[];

  constructor(private disciplinaService: DisciplinaService) { }

  ngOnInit(): void {
    this.disciplinaService.getAll().subscribe({
      next: (disciplinas) => {
        this.disciplinas = disciplinas;
      }
    });
  }

  onDelete(codigo: string) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover a disciplina com código (' + codigo + ")?"
    );
    if (!confirmation) {
      return;
    }
    this.disciplinaService.delete(codigo).subscribe({
      complete: () => {
        this.disciplinaService.getAll().subscribe({
          next: (disciplinas) => {
            this.disciplinas = disciplinas;
          }
        });
      },
      error: (error) => {
        alert("Erro ao deletar disciplina " + codigo);
      }
    });
  }

}
