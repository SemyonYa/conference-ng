import { Component, OnInit } from '@angular/core';
import { PresentationCollection } from 'src/app/_models/presentation-collection';
import { DataService } from 'src/app/_services/data.service';
import { translateYAnimation } from 'src/app/_animations/translate-y.animation';
import { AuthService } from 'src/app/_services/auth.service';
import { Roles } from 'src/app/_models/roles.enum';

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentation-list.component.html',
  styleUrls: ['./presentation-list.component.scss'],
  animations: [translateYAnimation]
})
export class PresentationListComponent implements OnInit {
  collection = new PresentationCollection();
  isCompere = false;
  constructor(private dataService: DataService, private authService: AuthService) { }

  ngOnInit() {
    this.isCompere = this.authService.loggedIn$.value.roleId === Roles.compere;
    this.dataService.presentationCollection$
      .subscribe(
        data => { this.collection = data }
      );
  }

}
