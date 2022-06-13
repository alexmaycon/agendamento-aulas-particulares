import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit, AfterViewInit {
  @ViewChild('mobile') sideNav?: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
  }
}
// Alex Maycon da Silva
