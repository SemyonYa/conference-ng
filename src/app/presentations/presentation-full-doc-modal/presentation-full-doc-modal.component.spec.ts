import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationFullDocModalComponent } from './presentation-full-doc-modal.component';

describe('PresentationFullDocModalComponent', () => {
  let component: PresentationFullDocModalComponent;
  let fixture: ComponentFixture<PresentationFullDocModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationFullDocModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationFullDocModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
