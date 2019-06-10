import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserhistoryPage } from './userhistory.page';

describe('UserhistoryPage', () => {
  let component: UserhistoryPage;
  let fixture: ComponentFixture<UserhistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserhistoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserhistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
