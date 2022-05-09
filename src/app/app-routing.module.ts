import { DisciplinasComponent } from './disciplinas/disciplinas/disciplinas.component';
import { AulasComponent } from './aulas/aulas/aulas.component';
import { AlunosComponent } from './alunos/alunos/alunos.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoComponent } from './alunos/aluno/aluno.component';
import { AulaComponent } from './aulas/aula/aula.component';
import { DisciplinaComponent } from './disciplinas/disciplina/disciplina.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'alunos/alunos', component: AlunosComponent},
  { path: 'alunos/aluno', component: AlunoComponent},
  { path: 'aulas/aulas', component: AulasComponent},
  { path: 'aulas/aula', component: AulaComponent},
  { path: 'disciplinas/disciplinas', component: DisciplinasComponent},
  { path: 'disciplinas/disciplina', component: DisciplinaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
