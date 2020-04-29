import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationListReportsProtocolComponent } from './presentation-list-reports-protocol.component';

describe('PresentationListReportsProtocolComponent', () => {
  let component: PresentationListReportsProtocolComponent;
  let fixture: ComponentFixture<PresentationListReportsProtocolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationListReportsProtocolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationListReportsProtocolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
