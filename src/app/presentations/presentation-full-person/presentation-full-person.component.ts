import { Component, Input } from '@angular/core';
import { Person } from 'src/app/_models/person';

@Component({
  selector: 'app-presentation-full-person',
  templateUrl: './presentation-full-person.component.html',
  styleUrls: ['./presentation-full-person.component.scss']
})
export class PresentationFullPersonComponent {
  @Input() person: Person;
}
