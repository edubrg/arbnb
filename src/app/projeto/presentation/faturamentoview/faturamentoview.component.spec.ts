/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FaturamentoviewComponent } from './faturamentoview.component';

describe('FaturamentoviewComponent', () => {
  let component: FaturamentoviewComponent;
  let fixture: ComponentFixture<FaturamentoviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaturamentoviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaturamentoviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
