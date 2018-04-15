import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarOrcamentosComponent } from './registrar-orcamentos.component';

describe('RegistrarOrcamentosComponent', () => {
  let component: RegistrarOrcamentosComponent;
  let fixture: ComponentFixture<RegistrarOrcamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarOrcamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarOrcamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
