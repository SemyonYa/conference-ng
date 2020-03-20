import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PeopleIndexComponent } from './people/people-index/people-index.component';
import { ScheduleTableComponent } from './schedule/schedule-table/schedule-table.component';
import { PresentationListComponent } from './presentations/presentation-list/presentation-list.component';
import { PhotoListComponent } from './galery/photo-list/photo-list.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'people', component: PeopleIndexComponent },
  { path: 'schedule', component: ScheduleTableComponent },
  { path: 'presentation', component: PresentationListComponent },
  { path: 'galery', component: PhotoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
