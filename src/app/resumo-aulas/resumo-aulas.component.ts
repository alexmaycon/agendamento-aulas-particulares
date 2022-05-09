import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumo-aulas',
  templateUrl: './resumo-aulas.component.html',
  styleUrls: ['./resumo-aulas.component.css']
})
export class ResumoAulasComponent implements OnInit {

  dataFormatada : string = "";

  @Input()
  dataFiltro : Date = new Date();

  pipe = new DatePipe('pt-BR');

  constructor() { }

  ngOnInit(): void {
    const data = this.pipe.transform(this.dataFiltro, 'dd/MM/yyyy h:mm:ss');
    if (data != null) {
      this.dataFormatada = data;
    }
  }

}
