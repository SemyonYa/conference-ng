import { Component } from '@angular/core';
import { Doc } from 'src/app/_models/doc';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-presentation-full-doc-modal',
  templateUrl: './presentation-full-doc-modal.component.html',
  styleUrls: ['./presentation-full-doc-modal.component.scss']
})
export class PresentationFullDocModalComponent {
  doc: Doc;
  constructor(public bsModalRef: BsModalRef) { }
}
