import { Component, OnInit } from '@angular/core';
import { Aula } from 'src/app/model/aula';
import { AulaService } from '../aula/aula.service';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css']
})
export class AulasComponent implements OnInit {


  aulas?: Aula[];

  constructor(private aulaService: AulaService) { }

  ngOnInit(): void {
    this.aulas = this.aulaService.getAulas();
  }

  onDelete(codigo: string) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover a aula com código (' + codigo+")?"
    );
    if (!confirmation) {
      return;
    }
    let response: boolean = this.aulaService.delete(codigo);

    this.aulas = this.aulaService.getAulas();
  }

}
