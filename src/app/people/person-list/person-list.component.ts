import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/app/_models/person';
import { translateYAnimation } from 'src/app/_animations/translate-y.animation';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PersonModalComponent } from '../person-modal/person-modal.component';
import { translateScaleAnimation } from 'src/app/_animations/translate-scale.animation';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss'],
  animations: [translateYAnimation, translateScaleAnimation]
})
export class PersonListComponent implements OnInit {
  bsModalRef: BsModalRef;
  @Input() people: Person[];
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void { }

  showPerson(person: Person) {
    const initialState = { person };
    this.bsModalRef = this.modalService.show(
      PersonModalComponent, 
      Object.assign({}, { initialState, class: 'modal-350' })
      );
  }
}
