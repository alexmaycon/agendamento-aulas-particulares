import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { AulasComponent } from './aulas/aulas/aulas.component';
import { AlunosComponent } from './alunos/alunos/alunos.component';
import { DisciplinasComponent } from './disciplinas/disciplinas/disciplinas.component';
import { AulaComponent } from './aulas/aula/aula.component';
import { AlunoComponent } from './alunos/aluno/aluno.component';
import { DisciplinaComponent } from './disciplinas/disciplina/disciplina.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    InicioComponent,
    AulasComponent,
    AlunosComponent,
    DisciplinasComponent,
    AulaComponent,
    AlunoComponent,
    DisciplinaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// Alex Maycon da Silva
