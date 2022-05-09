import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoAulasComponent } from './resumo-aulas.component';

describe('ResumoAulasComponent', () => {
  let component: ResumoAulasComponent;
  let fixture: ComponentFixture<ResumoAulasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumoAulasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumoAulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
