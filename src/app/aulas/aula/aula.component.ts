import { Disciplina } from './../../model/disciplina';
import { AlunoService } from './../../aluno.service';
import { DisciplinaService } from './../../disciplina.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AulaService } from 'src/app/aula.service';
import { Aula } from 'src/app/model/aula';
import { Aluno } from 'src/app/model/aluno';
@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.css']
})
export class AulaComponent implements OnInit {

  @ViewChild('form') form!: NgForm;

  aula!: Aula;
  alunos?: Aluno[];
  disciplinas?: Disciplina[];

  isNovo: boolean = true;
  titulo: String = "";
  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private aulaService: AulaService,
    private disciplinaService: DisciplinaService,
    private alunoService: AlunoService) {
  }

  ngOnInit(): void {

    var dataHora = new Date();
    this.aula = new Aula("", 0, "", "", dataHora.getDay() + "/" + dataHora.getMonth() + "/"
      + dataHora.getFullYear() + " " + dataHora.getHours() + ":" + dataHora.getMinutes());

    this.route.queryParams.subscribe((params) => {
      this.isNovo = params['isNovo'] == 'true' ? true : false;
      var codigo = params['codigo'];
      if (this.isNovo == true) {
        this.titulo = "Nova Aula";
      } else {
        this.titulo = "Editar Aula";
        this.aulaService.getById(codigo).subscribe({
          next: (a: Aula) => {
            this.aula = a;
          }
        });
      }
    });

    this.alunoService.getAll().subscribe(
      {
        next: (alunos: Aluno[]) => {
            this.alunos = alunos;
          },
        error: () => {
          console.log('Erro ao obter alunos');
        }
      }
    );

    this.disciplinaService.getAll().subscribe({
      next: (disciplinas) => {
        this.disciplinas = disciplinas;
        console.log(disciplinas);
      }
    });
  }

  async onSubmit() {
    this.isSubmitted = true;

    if (this.isNovo) {
      await this.aulaService.save(this.aula);
    } else {
      await this.aulaService.update(this.aula);
    }

    this.isShowMessage = true;
    this.isSuccess = true;
    this.form.reset();
    var dataHora = new Date();
    this.aula = new Aula("", 0, "", "", dataHora.getDay() + "/" + dataHora.getMonth() + "/"
      + dataHora.getFullYear() + " " + dataHora.getHours() + ":" + dataHora.getMinutes());
    this.router.navigate(['./aulas/aulas']);

  }

  onDelete(codigo: string) {
    let confirmation = window.confirm(
      'Você tem certeza que deseja remover a aula com código (' + codigo + ")?"
    );
    if (!confirmation) {
      return;
    }
    let response: boolean = false;

    this.aulaService.delete(codigo).subscribe({
      complete: () => {
        response = true;
        this.router.navigate(['./aulas/aulas']);
      },
      error:(error) => {
        response = false;
        alert("Erro ao deletar aula " + this.aula.id);
      }
    });
  }

}
