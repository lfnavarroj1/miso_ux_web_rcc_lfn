/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormulasListComponent } from './formulas-list.component';

describe('FormulasListComponent', () => {
  let component: FormulasListComponent;
  let fixture: ComponentFixture<FormulasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
