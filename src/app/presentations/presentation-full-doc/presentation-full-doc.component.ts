import { Component, OnInit, Input } from '@angular/core';
import { Doc } from 'src/app/_models/doc';

@Component({
  selector: 'app-presentation-full-doc',
  templateUrl: './presentation-full-doc.component.html',
  styleUrls: ['./presentation-full-doc.component.scss']
})
export class PresentationFullDocComponent implements OnInit {
  @Input() doc: Doc;
  constructor() { }

  ngOnInit(): void {
  }

}
