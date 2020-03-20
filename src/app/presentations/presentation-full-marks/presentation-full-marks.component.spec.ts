import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationFullMarksComponent } from './presentation-full-marks.component';

describe('PresentationFullMarksComponent', () => {
  let component: PresentationFullMarksComponent;
  let fixture: ComponentFixture<PresentationFullMarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationFullMarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationFullMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
