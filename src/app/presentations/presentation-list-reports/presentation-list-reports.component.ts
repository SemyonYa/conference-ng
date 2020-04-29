import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PresentationListReportsMarksComponent } from '../presentation-list-reports-marks/presentation-list-reports-marks.component';
import { PresentationListReportsProtocolComponent } from '../presentation-list-reports-protocol/presentation-list-reports-protocol.component';

@Component({
  selector: 'app-presentation-list-reports',
  templateUrl: './presentation-list-reports.component.html',
  styleUrls: ['./presentation-list-reports.component.scss']
})
export class PresentationListReportsComponent implements OnInit {
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  showMarks() {
    const initialState = {};
    this.bsModalRef = this.modalService.show(
      PresentationListReportsMarksComponent,
      Object.assign({}, { initialState, class: 'modal-doc' })
    );
  }

  showProtocol() {
    const initialState = {};
    this.bsModalRef = this.modalService.show(
      PresentationListReportsProtocolComponent,
      Object.assign({}, { initialState, class: 'modal-doc' })
    );
  }

}
