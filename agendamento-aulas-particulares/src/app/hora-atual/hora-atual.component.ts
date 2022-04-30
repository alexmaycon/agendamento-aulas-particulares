import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hora-atual',
  templateUrl: './hora-atual.component.html',
  styleUrls: ['./hora-atual.component.css']
})
export class HoraAtualComponent implements OnInit {

  hora = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
