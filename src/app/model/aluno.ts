export class Aluno {
  id! : string;
  nomeCompleto!  : string;
  email!  : string;

  constructor (id:string, nomeCompleto:string, email:string) {
    this.id = id;
    this.nomeCompleto = nomeCompleto;
    this.email = email;
  }
}
