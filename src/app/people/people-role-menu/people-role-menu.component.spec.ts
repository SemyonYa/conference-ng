import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleRoleMenuComponent } from './people-role-menu.component';

describe('PeopleRoleMenuComponent', () => {
  let component: PeopleRoleMenuComponent;
  let fixture: ComponentFixture<PeopleRoleMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleRoleMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleRoleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
