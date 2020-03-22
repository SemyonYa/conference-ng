import { Component, OnInit, Input } from '@angular/core';
import { Presentation } from 'src/app/_models/presentation';

@Component({
  selector: 'app-presentation-item',
  templateUrl: './presentation-item.component.html',
  styleUrls: ['./presentation-item.component.scss']
})
export class PresentationItemComponent implements OnInit {
  @Input() presentation: Presentation;
  constructor() { }

  ngOnInit(): void {
  }

}
