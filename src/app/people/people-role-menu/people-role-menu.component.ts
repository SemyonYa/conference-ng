import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonRole } from 'src/app/_models/person-role';

@Component({
  selector: 'app-people-role-menu',
  templateUrl: './people-role-menu.component.html',
  styleUrls: ['./people-role-menu.component.scss']
})
export class PeopleRoleMenuComponent implements OnInit {
  @Input() roles: PersonRole[];
  @Input() activeRoleId: number;
  @Output() activate = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  activateRole(roleId: number) {
    this.activate.emit(roleId);
  }
}
