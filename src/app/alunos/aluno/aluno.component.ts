import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  isNovo : boolean = true;
  titulo : String = "";

  constructor(private route: ActivatedRoute, private router: Router) {
   }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.isNovo = params['isNovo'] == 'true' ? true : false;
      if (this.isNovo == true) {
        this.titulo = "Novo Aluno";
      } else {
        this.titulo = "Editar Aluno";
      }
    });
  }

}
