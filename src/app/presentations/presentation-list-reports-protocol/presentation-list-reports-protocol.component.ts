import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-presentation-list-reports-protocol',
  templateUrl: './presentation-list-reports-protocol.component.html',
  styleUrls: ['./presentation-list-reports-protocol.component.scss']
})
export class PresentationListReportsProtocolComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

}
