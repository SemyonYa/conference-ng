import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationListReportsMarksComponent } from './presentation-list-reports-marks.component';

describe('PresentationListReportsMarksComponent', () => {
  let component: PresentationListReportsMarksComponent;
  let fixture: ComponentFixture<PresentationListReportsMarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationListReportsMarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationListReportsMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
