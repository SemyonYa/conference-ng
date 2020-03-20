import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationFullInfoComponent } from './presentation-full-info.component';

describe('PresentationFullInfoComponent', () => {
  let component: PresentationFullInfoComponent;
  let fixture: ComponentFixture<PresentationFullInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationFullInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationFullInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
