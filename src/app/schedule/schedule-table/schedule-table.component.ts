import { Component, OnInit } from '@angular/core';
import { ScheduleDate } from 'src/app/_models/schedule-date';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-schedule-table',
  templateUrl: './schedule-table.component.html',
  styleUrls: ['./schedule-table.component.scss']
})
export class ScheduleTableComponent implements OnInit {
  scheduleDates: ScheduleDate[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.scheduleDates$
      .subscribe(data => { this.scheduleDates = data });
  }

}
