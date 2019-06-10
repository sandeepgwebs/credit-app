import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterrecordPage } from './enterrecord.page';

describe('EnterrecordPage', () => {
  let component: EnterrecordPage;
  let fixture: ComponentFixture<EnterrecordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterrecordPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterrecordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
