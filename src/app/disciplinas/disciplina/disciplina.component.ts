import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent implements OnInit {

  // TODO: Passar via parametro de rota
  isNovaDisciplina : boolean = true;

  constructor() { }

  ngOnInit(): void {

  }

}
