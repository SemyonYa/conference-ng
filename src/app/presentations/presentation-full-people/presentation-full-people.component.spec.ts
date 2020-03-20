import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationFullPeopleComponent } from './presentation-full-people.component';

describe('PresentationFullPeopleComponent', () => {
  let component: PresentationFullPeopleComponent;
  let fixture: ComponentFixture<PresentationFullPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationFullPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationFullPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
