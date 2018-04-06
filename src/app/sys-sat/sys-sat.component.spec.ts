import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysSatComponent } from './sys-sat.component';

describe('SysSatComponent', () => {
  let component: SysSatComponent;
  let fixture: ComponentFixture<SysSatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysSatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysSatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
