import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterotpPage } from './enterotp.page';

describe('EnterotpPage', () => {
  let component: EnterotpPage;
  let fixture: ComponentFixture<EnterotpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterotpPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterotpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
