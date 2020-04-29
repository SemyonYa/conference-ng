import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router, NavigationStart } from '@angular/router';

import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';

import { DataService } from './_services/data.service';
import { AuthService } from './_services/auth.service';

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
import { PresentationListComponent } from './presentations/presentation-list/presentation-list.component';
import { PresentationItemComponent } from './presentations/presentation-item/presentation-item.component';
import { PresentationFullComponent } from './presentations/presentation-full/presentation-full.component';
import { PresentationFullInfoComponent } from './presentations/presentation-full-info/presentation-full-info.component';
import { PresentationFullPersonComponent } from './presentations/presentation-full-person/presentation-full-person.component';
import { PresentationFullMarksComponent } from './presentations/presentation-full-marks/presentation-full-marks.component';
import { PhotoListComponent } from './galery/photo-list/photo-list.component';
import { PhotoItemComponent } from './galery/photo-item/photo-item.component';
import { PresentationFullDocComponent } from './presentations/presentation-full-doc/presentation-full-doc.component';
import { AuthInterceptor } from './auth.interceptor';
import { PhotoLightboxComponent } from './galery/photo-lightbox/photo-lightbox.component';
import { EnterFormComponent } from './home/enter-form/enter-form.component';
import { PersonModalComponent } from './people/person-modal/person-modal.component';
import { ScheduleInfoModalComponent } from './schedule/schedule-info-modal/schedule-info-modal.component';
import { PresentationFullDocModalComponent } from './presentations/presentation-full-doc-modal/presentation-full-doc-modal.component';
import { SafePipe } from './_pipes/safe.pipe';
import { PresentationListReportsComponent } from './presentations/presentation-list-reports/presentation-list-reports.component';
import { PresentationListReportsMarksComponent } from './presentations/presentation-list-reports-marks/presentation-list-reports-marks.component';
import { PresentationListReportsProtocolComponent } from './presentations/presentation-list-reports-protocol/presentation-list-reports-protocol.component';
import { PresentationFullCurrentComponent } from './presentations/presentation-full-current/presentation-full-current.component';

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
    PersonModalComponent,
    HomeComponent,
    BodyComponent,
    ScheduleTableComponent,
    PresentationListComponent,
    PresentationListReportsComponent,
    PresentationItemComponent,
    PresentationFullComponent,
    PresentationFullInfoComponent,
    PresentationFullPersonComponent,
    PresentationFullMarksComponent,
    PhotoListComponent,
    PhotoItemComponent,
    PresentationFullDocComponent,
    PhotoLightboxComponent,
    EnterFormComponent,
    ScheduleInfoModalComponent,
    PresentationFullDocModalComponent,
    SafePipe,
    PresentationListReportsMarksComponent,
    PresentationListReportsProtocolComponent,
    PresentationFullCurrentComponent,
  ],
  entryComponents: [
    PersonModalComponent
  ],
  imports: [
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private dataService: DataService, private router: Router, private modalService: BsModalService, private authService: AuthService) {
    this.authService.init();
    if (authService.loggedIn$.value) {
      console.log('data init');
      this.dataService.init(this.authService.loggedIn$.value.personId);
    }
    
    router.events
      .subscribe(
        e => {
          if (e instanceof NavigationStart) {
            // hide modals on route change
            this.modalService.hide(this.modalService.getModalsCount());

            // load all photos in galery click
            if (e.url === '/galery') {
              this.dataService.getPhotos(this.authService.loggedIn$.value.personId);
            }
          }
        }
      );

    // dataService.rolesWithPeople$.subscribe(data => { console.log('people', data) });
    // dataService.scheduleDates$.subscribe(data => { console.log('schedule', data) });
    // dataService.presentationCollection$.subscribe(data => { console.log('presentationCollection', data) });
    // dataService.photos$.subscribe(data => { console.log('photos', data) });
  }
}
