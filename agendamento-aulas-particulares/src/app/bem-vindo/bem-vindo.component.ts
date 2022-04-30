import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-bem-vindo',
  templateUrl: './bem-vindo.component.html',
  styleUrls: ['./bem-vindo.component.css']
})
export class BemVindoComponent implements OnInit {

  usuario : String;

  constructor() {
    this.usuario = "Alex";
  }

  ngOnInit(): void {
  }

}
