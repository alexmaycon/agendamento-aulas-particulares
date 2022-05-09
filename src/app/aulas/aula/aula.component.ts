import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.css']
})
export class AulaComponent implements OnInit {

  isNovo : boolean = true;
  titulo : String = "";

  constructor(private route: ActivatedRoute, private router: Router) {
   }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.isNovo = params['isNovo'] == 'true' ? true : false;
      if (this.isNovo == true) {
        this.titulo = "Nova Aula";
      } else {
        this.titulo = "Editar Aula";
      }
    });
  }

}
