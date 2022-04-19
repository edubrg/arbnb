/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResumoviewComponent } from './resumoview.component';

describe('ResumoviewComponent', () => {
  let component: ResumoviewComponent;
  let fixture: ComponentFixture<ResumoviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumoviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumoviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
