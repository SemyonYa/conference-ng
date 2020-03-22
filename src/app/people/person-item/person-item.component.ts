import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/app/_models/person';

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.scss']
})
export class PersonItemComponent implements OnInit {
  @Input() person: Person;
  constructor() { }

  ngOnInit(): void {
  }

}
