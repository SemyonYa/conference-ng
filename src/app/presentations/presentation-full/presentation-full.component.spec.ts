import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationFullComponent } from './presentation-full.component';

describe('PresentationFullComponent', () => {
  let component: PresentationFullComponent;
  let fixture: ComponentFixture<PresentationFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
