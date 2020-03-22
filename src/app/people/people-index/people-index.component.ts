import { Component, OnInit } from '@angular/core';
import { PersonRole } from 'src/app/_models/person-role';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-people-index',
  templateUrl: './people-index.component.html',
  styleUrls: ['./people-index.component.scss']
})
export class PeopleIndexComponent implements OnInit {
  rolesWithPeople: PersonRole[] = [];
  activeRole: PersonRole = null;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.rolesWithPeople$
      .subscribe((data) => {
        this.rolesWithPeople = data;
        this.activeRole = this.rolesWithPeople.find(r => r.id)
      });
  }

  activateFromChild(roleId: number) {
    this.activeRole = this.rolesWithPeople.find(r => r.id === roleId);
  }
}
