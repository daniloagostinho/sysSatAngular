import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEdificioComponent } from './editar-edificio.component';

describe('EditarEdificioComponent', () => {
  let component: EditarEdificioComponent;
  let fixture: ComponentFixture<EditarEdificioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarEdificioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEdificioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
