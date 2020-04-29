import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleInfoModalComponent } from './schedule-info-modal.component';

describe('ScheduleInfoModalComponent', () => {
  let component: ScheduleInfoModalComponent;
  let fixture: ComponentFixture<ScheduleInfoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleInfoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
