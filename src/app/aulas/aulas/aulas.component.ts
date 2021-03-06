import { Component, OnInit } from '@angular/core';
import { AulaService } from 'src/app/aula.service';
import { Aula } from 'src/app/model/aula';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css']
})
export class AulasComponent implements OnInit {


  aulas?: Aula[];

  constructor(private aulaService: AulaService) { }

  ngOnInit(): void {
    this.aulaService.getAll().subscribe({
      next: (aulas) => {
        this.aulas = aulas;
      }
    });
  }

  onDelete(codigo: string) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover a aula com código (' + codigo + ")?"
    );
    if (!confirmation) {
      return;
    }
    this.aulaService.delete(codigo).subscribe({
      complete: () => {
        this.aulaService.getAll().subscribe({
          next: (aulas) => {
            this.aulas = aulas;
          }
        });
      },
      error: (error) => {
        alert("Erro ao deletar aula "+codigo);
      }
    });
  }

}
