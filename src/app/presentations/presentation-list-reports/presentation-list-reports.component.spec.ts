import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationListReportsComponent } from './presentation-list-reports.component';

describe('PresentationListReportsComponent', () => {
  let component: PresentationListReportsComponent;
  let fixture: ComponentFixture<PresentationListReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationListReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationListReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
