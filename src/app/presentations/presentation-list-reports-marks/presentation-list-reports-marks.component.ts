import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DataService } from 'src/app/_services/data.service';
import { ReportPresentation } from 'src/app/_models/report-presentation';
import { Rating } from 'src/app/_models/rating';

@Component({
  selector: 'app-presentation-list-reports-marks',
  templateUrl: './presentation-list-reports-marks.component.html',
  styleUrls: ['./presentation-list-reports-marks.component.scss']
})
export class PresentationListReportsMarksComponent implements OnInit {
  reportPresentations: ReportPresentation[] = [];
  markInfo: string = '';
  constructor(public bsModalRef: BsModalRef, private dataService: DataService) { }

  ngOnInit(): void {
    // this.markInfo = 'default';
    this.dataService.reportData()
      .subscribe(
        rps => {
          this.reportPresentations = rps;
        }
      )
  }

  onShown(presentationName: string, rating: Rating) {
    this.markInfo = rating ? `
    <p><strong>${presentationName}</strong></p>
    <p>${rating.level} <em>${rating.name}</em></p>
    ` : `
    <p>Оценка не поставлена</p>
    `;
  }

  onHidden() {
    this.markInfo = '';

  }


}
