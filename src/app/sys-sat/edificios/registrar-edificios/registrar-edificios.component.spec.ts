import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEdificiosComponent } from './registrar-edificios.component';

describe('RegistrarEdificiosComponent', () => {
  let component: RegistrarEdificiosComponent;
  let fixture: ComponentFixture<RegistrarEdificiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarEdificiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarEdificiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
