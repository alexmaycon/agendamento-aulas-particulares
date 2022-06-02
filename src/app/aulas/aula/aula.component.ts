import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Aula } from 'src/app/model/aula';
import { AulaService } from './aula.service';
@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.css']
})
export class AulaComponent implements OnInit {

  @ViewChild('form') form!: NgForm;

  aula!: Aula;

  isNovo: boolean = true;
  titulo: String = "";
  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private route: ActivatedRoute, private router: Router, private aulaService: AulaService) {
  }

  ngOnInit(): void {

    var dataHora = new Date();
    this.aula = new Aula("", 0, "", "", dataHora.getDay()+"/"+dataHora.getMonth()+"/"
    +dataHora.getFullYear()+" "+dataHora.getHours()+":"+dataHora.getMinutes());

    this.route.queryParams.subscribe((params) => {
      this.isNovo = params['isNovo'] == 'true' ? true : false;
      var codigo = params['codigo'];
      if (this.isNovo == true) {
        this.titulo = "Nova Aula";
      } else {
        this.titulo = "Editar Aula";
        var aulaGet = this.aulaService.getAula(codigo);
        if (aulaGet)
          this.aula = aulaGet;
      }
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.aulaService.isExist(this.aula.codigo)) {
      this.aulaService.save(this.aula);
    } else {
      this.aulaService.update(this.aula);
    }
    this.isShowMessage = true;
    this.isSuccess = true;

    this.form.reset();
    var dataHora = new Date();
    this.aula = new Aula("", 0, "", "", dataHora.getDay()+"/"+dataHora.getMonth()+"/"
    +dataHora.getFullYear()+" "+dataHora.getHours()+":"+dataHora.getMinutes());

    this.router.navigate(['./aulas/aulas']);
  }

  onDelete(codigo: string) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover a aula com código (' + codigo+")?"
    );
    if (!confirmation) {
      return;
    }
    let response: boolean = this.aulaService.delete(codigo);

    this.router.navigate(['./aulas/aulas']);
  }

}
