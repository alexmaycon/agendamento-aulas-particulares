import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent implements OnInit {

  isNovo : boolean = true;
  titulo : String = "";

  constructor(private route: ActivatedRoute, private router: Router) {
   }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.isNovo = params['isNovo'] == 'true' ? true : false;
      if (this.isNovo == true) {
        this.titulo = "Nova Disciplina";
      } else {
        this.titulo = "Editar Disciplina";
      }
    });
  }

}
