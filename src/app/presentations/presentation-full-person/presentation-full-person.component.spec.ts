import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationFullPersonComponent } from './presentation-full-person.component';

describe('PresentationFullPersonComponent', () => {
  let component: PresentationFullPersonComponent;
  let fixture: ComponentFixture<PresentationFullPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationFullPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationFullPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
