import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoraAtualComponent } from './hora-atual.component';

describe('HoraAtualComponent', () => {
  let component: HoraAtualComponent;
  let fixture: ComponentFixture<HoraAtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoraAtualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoraAtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
