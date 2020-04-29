import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationFullCurrentComponent } from './presentation-full-current.component';

describe('PresentationFullCurrentComponent', () => {
  let component: PresentationFullCurrentComponent;
  let fixture: ComponentFixture<PresentationFullCurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationFullCurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationFullCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
