import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DisciplinaService } from 'src/app/disciplina.service';
import { Disciplina } from 'src/app/model/disciplina';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent implements OnInit {

  @ViewChild('form') form!: NgForm;

  isNovo: boolean = true;
  titulo: String = "";

  disciplina!: Disciplina;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private disciplinaService: DisciplinaService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.isNovo = params['isNovo'] == 'true' ? true : false;
      var codigo = params['codigo'];
      this.disciplina = new Disciplina("", "");
      if (this.isNovo == true) {
        this.titulo = "Nova Disciplina";
      } else {
        this.titulo = "Editar Disciplina";
        this.disciplinaService.getById(codigo).subscribe({
          next: (d) => {
            this.disciplina = d;
          }
        });
      }
    });
  }

  async onSubmit() {
    if (this.isNovo) {
      await this.disciplinaService.save(this.disciplina);
    } else {
      await this.disciplinaService.update(this.disciplina);
    }

    this.form.reset();
    this.router.navigate(['./disciplinas/disciplinas']);

  }

  onDelete(codigo: string) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover a disciplina com código (' + codigo + ")?"
    );
    if (!confirmation) {
      return;
    }
    let response: boolean = false;

    this.disciplinaService.delete(codigo).subscribe({
      complete: () => {
        response = true;
        this.router.navigate(['./disciplinas/disciplinas']);
      },
      error: (error) => {
        response = false;
        alert("Erro ao deletar a disciplina " + this.disciplina.id);
      }
    });
  }

}

