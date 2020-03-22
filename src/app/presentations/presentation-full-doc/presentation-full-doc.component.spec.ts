import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationFullDocComponent } from './presentation-full-doc.component';

describe('PresentationFullDocComponent', () => {
  let component: PresentationFullDocComponent;
  let fixture: ComponentFixture<PresentationFullDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationFullDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationFullDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
