import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/app/_models/person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
  @Input() people: Person[];
  constructor() { }

  ngOnInit(): void {
  }

}
