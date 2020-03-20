import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonTypeMenuComponent } from './person-type-menu.component';

describe('PersonTypeMenuComponent', () => {
  let component: PersonTypeMenuComponent;
  let fixture: ComponentFixture<PersonTypeMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonTypeMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonTypeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
