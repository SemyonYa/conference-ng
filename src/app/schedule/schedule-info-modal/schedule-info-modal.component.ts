import { Component } from '@angular/core';
import { Schedule } from 'src/app/_models/schedule';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-schedule-info-modal',
  templateUrl: './schedule-info-modal.component.html',
  styleUrls: ['./schedule-info-modal.component.scss']
})
export class ScheduleInfoModalComponent {
  sch: Schedule;

  constructor(public bsModalRef: BsModalRef) {

  }
}
