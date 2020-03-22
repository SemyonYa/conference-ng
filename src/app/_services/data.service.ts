import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Person } from '../_models/person';
import { BehaviorSubject, Observable } from 'rxjs';
import { PersonRole } from '../_models/person-role';
import { Schedule } from '../_models/schedule';
import { ScheduleDate } from '../_models/schedule-date';
import { Presentation } from '../_models/presentation';
import { PresentationCollection } from '../_models/presentation-collection';
import { Section } from '../_models/section';
import { Doc } from '../_models/doc';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  rolesWithPeople$ = new BehaviorSubject<PersonRole[]>([]);
  scheduleDates$ = new BehaviorSubject<ScheduleDate[]>([]);
  presentationCollection$ = new BehaviorSubject<PresentationCollection>(new PresentationCollection());
  constructor(private http: HttpClient) { }

  getPeople() {
    this.http.get(environment.api + '/people')
      .subscribe(
        (data: any[]) => {
          this.rolesWithPeople$.next(data.map((x) => {
            let role = new PersonRole(x.role.id, x.role.name);
            role.people = (x.people as any[]).map(p => new Person(p.id, p.surname, p.name, p.name_2, p.vocation, p.info, p.organization, p.photo));
            return role;
          }));
        },
        (error) => { console.log('error', error) }
      );
  }

  getSchedule() {
    this.http.get(environment.api + '/schedule')
      .subscribe(
        (data: any[]) => {
          const schs = data.map(sd => {
            let scheduleDate = new ScheduleDate(sd.date);
            scheduleDate.schedules = (sd.schedules as any[]).map(s => {
              let sch = new Schedule(s.id, s.name, s.date, s.time, s.duration, s.place);
              sch.presentations = (s.presentations as any[]).map(p => new Presentation(p.id, p.name, p.description, p.organization, p.is_current));
              return sch;
            });
            return scheduleDate;
          });
          this.scheduleDates$.next(schs);
        }
      );
  }

  getPresentations() {
    this.http.get(environment.api + '/presentations')
      .subscribe(
        (data: any) => {
          let collection = new PresentationCollection();
          collection.sections = (data.sections as any[]).map(s => {
            let section = new Section(s.id, s.name);
            section.presentations = (data.presentations as any[]).map(p => new Presentation(p.id, p.name, p.description, p.organization, p.is_current));
            return section;
          });
          collection.zero = (data.zero as any[]).map(p => new Presentation(p.id, p.name, p.description, p.organization, p.is_current));
          this.presentationCollection$.next(collection);
        }
      );
  }

  getPresentation(id: number): Observable<Presentation> {
    return this.http.get(environment.api + '/presentation?id=' + id)
      .pipe(
        map(
          (p: any) => {
            let presentation = new Presentation(p.presentation.id, p.presentation.name, p.presentation.description, p.presentation.organization, p.presentation.is_current);
            presentation.people = (p.presentation.people as any[]).map(person => new Person(person.id, person.surname, person.name, person.name_2, person.vocation, person.info, person.organization, person.photo));
            presentation.docs = (p.presentation.docs as any[]).map(d => new Doc(d.id, d.name, d.description, d.path, d.extension));
            return presentation;
          }
        )
      );
  }
}
