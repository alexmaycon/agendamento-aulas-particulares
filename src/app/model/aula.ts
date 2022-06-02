export class Aula {
  codigo! : string;
  valor!  : number;
  disciplina! : string;
  aluno! : string;
  dataHora! : string;

  constructor (codigo:string, valor:number, disciplina:string, aluno:string, dataHora:string) {
    this.codigo = codigo;
    this.valor = valor;
    this.disciplina = disciplina;
    this.aluno = aluno;
    this.dataHora = dataHora;
  }
}
