# Agendamento de Aulas Particulares

Projeto desenvolvimento na Pós-gradução em Tecnologia Java da UTFPR-Campus Cornélio Procópio (2022).

## Checklist

- [x] Criar o repositório no GitHub com a estrutura do Gitflow, ou seja, branches main e develop.
- [x] Usar componentes de algum framework CSS (Bootstrap, Materialize ou outro)
- [x] Apresentar as telas com layout responsivo usando ou não algum framework CSS.
- [x] Construir páginas web com o conceito de componentes.
- [x] Criar o layout da aplicação com componentes, ou seja, o cabeçalho e rodapé precisam ser componentes.
- [x] Usar pelo menos dois tipos de data-binding (Interpolation, Property Binding, Event Binding e Two Way Data Binding).
- [x] Passar dados via hierarquia de componentes, ou seja, usando @Input ou @Output.
- [x] Mapear componentes à rotas no módulo de rotas.
- [x] Criar navegação entre páginas por meio de rotas.
- [x] Passar dados entre componentes que representam diferentes telas via parâmetros de rotas.
- [x] Validar campos do formulário com REGEX e apresentar os erros.
- [x] Desabilitar o botão de submit enquanto o formulário está inválido.
- [x] Cadastrar uma entidade no Web Storage.
- [x] Fazer requisições a API com tratamento da resposta com Promises.
- [x] Cadastrar uma entidade no JSON Server.
- [x] Apresentar uma lista de dados com a diretiva estrutural ngFor.
- [x] Usar a diretiva ngIf
- [x] Formatar a apresentação de dados com Pipes.
- [x] Fazer requisições a API com tratamento da resposta com Observables.
- [x] Build e deploy da aplicação.

## Live demo

https://alexmaycon.github.io/agendamento-aulas-particulares/

Observação: Necessário iniciar o json:server do projeto localmente - vide comando abaixo.

## Protótipo das Telas

https://www.figma.com/file/0ac1oxr7bDJ4pM71lOjzO8/agendamento-aulas-particulares?node-id=0%3A1

## Build

```
npm install -g @angular/cli
cd agendamento-aulas-particulares
npm install
ng build
```

## Deploy
```
ng deploy --base-href=/<repositoryname>/
```

## Running Json:server
```
npm run json:server
```
