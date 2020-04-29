import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from 'src/app/_services/data.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PersonModalComponent } from 'src/app/people/person-modal/person-modal.component';
import { Presentation } from 'src/app/_models/presentation';
import { Rating } from 'src/app/_models/rating';
import { Mark } from 'src/app/_models/mark';
import { Person } from 'src/app/_models/person';
import { translateYAnimation } from 'src/app/_animations/translate-y.animation';
import { AuthService } from 'src/app/_services/auth.service';
import { Roles } from 'src/app/_models/roles.enum';
import { onOpacityAnimation } from 'src/app/_animations/on-opacity.animation';

@Component({
  selector: 'app-presentation-full',
  templateUrl: './presentation-full.component.html',
  styleUrls: ['./presentation-full.component.scss'],
  animations: [translateYAnimation, onOpacityAnimation]
})
export class PresentationFullComponent implements OnInit {
  bsModalRef: BsModalRef;
  presentation: Presentation;
  ratings: Rating[] = [];
  mark: Mark;
  presentationId: number;
  isJury = false;
  isCompere = false;
  savedVisible: boolean = false;
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private modalService: BsModalService, private authService: AuthService) { }

  ngOnInit(): void {
    this.presentationId = this.activatedRoute.snapshot.params.id;
    this.initPresentation();
    this.isCompere = this.authService.loggedIn$.value.roleId === Roles.compere;
    this.isJury = this.authService.loggedIn$.value.roleId === Roles.jury;
    if (this.isJury) {
      this.dataService.ratings$
        .subscribe(
          data => {
            this.ratings = data;
          }
        );
      this.getMark();
    }
  }

  initPresentation() {
    this.dataService.getPresentation(this.presentationId)
      .subscribe(
        p => {
          this.presentation = p;
        }
      );
  }

  setMark(m: Mark) {
    this.dataService.setMark(m)
      .subscribe(
        resp => {
          if (resp) {
            this.savedVisible = true;
            setTimeout(() => {
              this.savedVisible = false;
            }, 700);
          }
        }
      );
  }

  getMark() {
    this.dataService.getMark(this.presentationId, this.authService.loggedIn$.value.personId)
      .subscribe(
        data => {
          this.mark = data;
        }
      );
  }

  showPerson(person: Person) {
    const initialState = { person };
    this.bsModalRef = this.modalService.show(PersonModalComponent, { initialState });
  }

  changeCurrent(e: Event) {
    const elem: HTMLInputElement = e.target as HTMLInputElement;
    this.dataService.setCurrentPresentation(this.presentation.id, elem.checked)
      .subscribe(
        (resp) => {
          if (resp) {
            this.initPresentation();
            this.dataService.getPresentations();
          }
        }
      );
  }

}
