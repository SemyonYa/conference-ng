import { Component, OnInit, Input } from '@angular/core';
import { Doc } from 'src/app/_models/doc';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PresentationFullDocModalComponent } from '../presentation-full-doc-modal/presentation-full-doc-modal.component';

@Component({
  selector: 'app-presentation-full-doc',
  templateUrl: './presentation-full-doc.component.html',
  styleUrls: ['./presentation-full-doc.component.scss']
})
export class PresentationFullDocComponent implements OnInit {
  bsModalRef: BsModalRef;
  @Input() doc: Doc;
  icons = new Map<string, string>();
  icon: string = '';
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
    this.icons.set('default', '/assets/svg/document-outline.svg');
    this.icons.set('pdf', '/assets/svg/pdf.svg');
    this.icon = this.icons.get(this.doc.extension) ? this.icons.get(this.doc.extension) : this.icons.get('default');
  }

  showDoc(doc: Doc) {
    const initialState = { doc };
    this.bsModalRef = this.modalService.show(
      PresentationFullDocModalComponent,
      Object.assign({}, {initialState, class: 'modal-doc'})
    );
  }

}
