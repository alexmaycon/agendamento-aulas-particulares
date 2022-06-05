import { AlunoService } from 'src/app/aluno.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from 'src/app/model/aluno';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  @ViewChild('form') form!: NgForm;

  isNovo : boolean = true;
  titulo : String = "";

  aluno! : Aluno;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private alunoService : AlunoService) {
   }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.isNovo = params['isNovo'] == 'true' ? true : false;
      var codigo = params['codigo'];
      this.aluno = new Aluno("","","");
      if (this.isNovo == true) {
        this.titulo = "Novo Aluno";
      } else {
        this.titulo = "Editar Aluno";
        this.alunoService.getById(codigo).subscribe(
          {
            next: (aluno: Aluno) => {
                this.aluno = aluno;
              },
            error: () => {
              console.log('Erro ao obter aluno');
            }
          }
        );
      }
    });
  }

  async onSubmit() {
    if (this.isNovo) {
      await this.alunoService.save(this.aluno);
    } else {
      await this.alunoService.update(this.aluno);
    }

    this.form.reset();
    this.router.navigate(['./alunos/alunos']);

  }

  onDelete(codigo: string) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover o aluno com código (' + codigo+")?"
    );
    if (!confirmation) {
      return;
    }
    let response: boolean = false;

    this.alunoService.delete(codigo).subscribe(
      {
        complete: () => {
            response = true;
            this.router.navigate(['./alunos/alunos']);
          },
        error: () => {
          alert("Erro ao deletar aluno "+this.aluno.id);
        }
      }
    );
  }

}
