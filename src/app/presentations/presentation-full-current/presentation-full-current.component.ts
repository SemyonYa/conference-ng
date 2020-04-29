import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Presentation } from 'src/app/_models/presentation';

@Component({
  selector: 'app-presentation-full-current',
  templateUrl: './presentation-full-current.component.html',
  styleUrls: ['./presentation-full-current.component.scss']
})
export class PresentationFullCurrentComponent {
  @Input() presentation: Presentation;
  @Output() changeCurrent = new EventEmitter<Event>()

  change(e: Event) {
    this.changeCurrent.emit(e);
  }
}
