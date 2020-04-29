import { Component, OnInit } from '@angular/core';
import { ScheduleDate } from 'src/app/_models/schedule-date';
import { DataService } from 'src/app/_services/data.service';
import { translateYAnimation } from 'src/app/_animations/translate-y.animation';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ScheduleInfoModalComponent } from '../schedule-info-modal/schedule-info-modal.component';
import { Schedule } from 'src/app/_models/schedule';

@Component({
  selector: 'app-schedule-table',
  templateUrl: './schedule-table.component.html',
  styleUrls: ['./schedule-table.component.scss'],
  animations: [translateYAnimation]
})
export class ScheduleTableComponent implements OnInit {
  scheduleDates: ScheduleDate[] = [];
  constructor(private dataService: DataService, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.dataService.scheduleDates$
      .subscribe(data => { this.scheduleDates = data });
  }

  showInfo(sch: Schedule) {
    const initialState = { sch };
    this.modalService.show(
      ScheduleInfoModalComponent,
      { initialState }
    );
  }

}
