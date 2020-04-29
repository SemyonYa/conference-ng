import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PeopleIndexComponent } from './people/people-index/people-index.component';
import { ScheduleTableComponent } from './schedule/schedule-table/schedule-table.component';
import { PresentationListComponent } from './presentations/presentation-list/presentation-list.component';
import { PhotoListComponent } from './galery/photo-list/photo-list.component';
import { PresentationFullComponent } from './presentations/presentation-full/presentation-full.component';
import { InGuard } from './_guards/in.guard';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'people', component: PeopleIndexComponent, canActivate: [InGuard] },
  { path: 'schedule', component: ScheduleTableComponent, canActivate: [InGuard] },
  { path: 'presentation', component: PresentationListComponent, canActivate: [InGuard] },
  { path: 'presentation/:id', component: PresentationFullComponent, canActivate: [InGuard] },
  { path: 'galery', component: PhotoListComponent, canActivate: [InGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
