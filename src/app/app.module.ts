import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './menu/list/list.component';
import { ItemComponent } from './menu/item/item.component';
import { HeaderComponent } from './header/header.component';
import { PeopleIndexComponent } from './people/people-index/people-index.component';
import { PeopleRoleMenuComponent } from './people/people-role-menu/people-role-menu.component';
import { PersonListComponent } from './people/person-list/person-list.component';
import { PersonItemComponent } from './people/person-item/person-item.component';
import { HomeComponent } from './home/home.component';
import { BodyComponent } from './body/body.component';
import { ScheduleTableComponent } from './schedule/schedule-table/schedule-table.component';
import { ScheduleInfoComponent } from './schedule/schedule-info/schedule-info.component';
import { PresentationListComponent } from './presentations/presentation-list/presentation-list.component';
import { PresentationItemComponent } from './presentations/presentation-item/presentation-item.component';
import { PresentationFullComponent } from './presentations/presentation-full/presentation-full.component';
import { PresentationFullInfoComponent } from './presentations/presentation-full-info/presentation-full-info.component';
import { PresentationFullPeopleComponent } from './presentations/presentation-full-people/presentation-full-people.component';
import { PresentationFullPersonComponent } from './presentations/presentation-full-person/presentation-full-person.component';
import { PresentationFullMarksComponent } from './presentations/presentation-full-marks/presentation-full-marks.component';
import { PhotoListComponent } from './galery/photo-list/photo-list.component';
import { PhotoItemComponent } from './galery/photo-item/photo-item.component';
import { DataService } from './_services/data.service';
import { PresentationFullDocComponent } from './presentations/presentation-full-doc/presentation-full-doc.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent,
    HeaderComponent,
    PeopleIndexComponent,
    PeopleRoleMenuComponent,
    PersonListComponent,
    PersonItemComponent,
    HomeComponent,
    BodyComponent,
    ScheduleTableComponent,
    ScheduleInfoComponent,
    PresentationListComponent,
    PresentationItemComponent,
    PresentationFullComponent,
    PresentationFullInfoComponent,
    PresentationFullPeopleComponent,
    PresentationFullPersonComponent,
    PresentationFullMarksComponent,
    PhotoListComponent,
    PhotoItemComponent,
    PresentationFullDocComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private dataService: DataService) {
    this.dataService.getPeople();
    this.dataService.getSchedule();
    this.dataService.getPresentations();

    dataService.rolesWithPeople$.subscribe(data => { console.log('people', data) });
    dataService.scheduleDates$.subscribe(data => { console.log('schedule', data) });
    dataService.presentationCollection$.subscribe(data => { console.log('presentationCollection', data) });
  }
}
