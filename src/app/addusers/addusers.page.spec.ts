import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddusersPage } from './addusers.page';

describe('AddusersPage', () => {
  let component: AddusersPage;
  let fixture: ComponentFixture<AddusersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddusersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddusersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
