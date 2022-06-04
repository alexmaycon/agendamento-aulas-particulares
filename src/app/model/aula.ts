export class Aula {
  id! : string;
  valor!  : number;
  disciplinaId! : string;
  alunoId! : string;
  dataHora! : string;

  constructor (id:string, valor:number, disciplina:string, aluno:string, dataHora:string) {
    this.id = id;
    this.valor = valor;
    this.disciplinaId = disciplina;
    this.alunoId = aluno;
    this.dataHora = dataHora;
  }
}
