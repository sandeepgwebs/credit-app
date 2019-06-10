import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserrecordsPage } from './userrecords.page';

describe('UserrecordsPage', () => {
  let component: UserrecordsPage;
  let fixture: ComponentFixture<UserrecordsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserrecordsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserrecordsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
