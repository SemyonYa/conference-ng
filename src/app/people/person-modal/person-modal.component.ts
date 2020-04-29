import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/_models/person';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-person-modal',
  templateUrl: './person-modal.component.html',
  styleUrls: ['./person-modal.component.scss']
})
export class PersonModalComponent implements OnInit {
  person: Person;
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

}
