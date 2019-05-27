import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto04Component } from './punto04.component';

describe('Punto04Component', () => {
  let component: Punto04Component;
  let fixture: ComponentFixture<Punto04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Punto04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
