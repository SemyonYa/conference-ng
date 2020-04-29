import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
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
import { Rating } from '../_models/rating';
import { Mark } from '../_models/mark';
import { Photo } from '../_models/photo';
import { User } from '../_models/user';
import { ReportPresentation } from '../_models/report-presentation';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  rolesWithPeople$ = new BehaviorSubject<PersonRole[]>([]);
  scheduleDates$ = new BehaviorSubject<ScheduleDate[]>([]);
  presentationCollection$ = new BehaviorSubject<PresentationCollection>(new PresentationCollection());
  photos$ = new BehaviorSubject<Photo[]>([]);
  ratings$ = new BehaviorSubject<Rating[]>([]);
  constructor(private http: HttpClient) { }

  init(personId) {
    this.getPeople();
    this.getSchedule();
    this.getPresentations();
    if (personId) {
      this.getPhotos(personId);
      this.getRatings();
    }
  }

  login(formData: any) {
    return this.http.post<User | boolean>(environment.auth + '/login', formData)
      .pipe(
        map(
          (data: any) => {
            if (data == false) {
              return false;
            } else {
              return data;
              // return User.create(data.id, data.login, formData.password, data.password_hash, data.role_id, data.person?.id, data.person?.surname, data.person?.name, data.person?.name_2);
            }
          }
        )
      );
  }

  refreshing(refreshToken: string) {
    return this.http.post(environment.auth + '/refreshing', { refreshToken });
  }

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
            let presentation = new Presentation(p.id, p.name, p.description, p.organization, p.is_current);
            presentation.people = (p.people as any[]).map(person => new Person(person.id, person.surname, person.name, person.name_2, person.vocation, person.info, person.organization, person.photo));
            presentation.docs = (p.docs as any[]).map(d => new Doc(d.id, d.name, d.description, d.path, d.extension));
            return presentation;
          }
        )
      );
  }

  setCurrentPresentation(id: number, isCurrent: boolean) {
    return this.http.get(`${environment.api}/set-current-presentation?id=${id}&is_current=${isCurrent ? 1 : 0}`);
  }

  getRatings() {
    return this.http.get<Rating[]>(environment.api + '/ratings')
      .subscribe(
        (data: any[]) => {
          this.ratings$.next(data.map(r => new Rating(r.id, r.level, r.name)));
        }
      );
  }

  getMark(presentationId: number, juryId: number) {
    return this.http.get<Mark>(environment.api + '/mark?presentation_id=' + presentationId + '&jury_id=' + juryId)
      .pipe(
        map(
          (data: any) => data ? Mark.create(data.id, data.rating_id, data.description, presentationId, juryId) : new Mark(presentationId, juryId)
        )
      );
  }

  setMark(mark: Mark) {
    return this.http.post(environment.api + '/set-mark', { mark });
  }

  getPhotos(personId: number) {
    this.http.get<Photo[]>(environment.api + '/galery?person_id=' + personId)
      .subscribe(
        (data: any[]) => {
          let no = 1;
          this.photos$.next(data.map(p => new Photo(p.id, p.name, p.title, p.count, p.my_like, no++)));
        }
      );
  }

  likePhoto(personId: number, photoId: number) {
    this.http.post(environment.api + '/like', { personId, photoId })
      .subscribe(
        resp => {
          if (resp) this.getPhotos(personId);
        }
      );
  }

  reportData() {
    return this.http.get<ReportPresentation[]>(environment.api + '/report-data')
      .pipe(
        map(
          (data: any[]) => data.map(p => {
            let reportPresentation: ReportPresentation = new ReportPresentation();
            reportPresentation.presentationId = Number.parseInt(p.presentation.id);
            reportPresentation.presentationName = p.presentation.name;
            reportPresentation.personMarks = (p.person_marks as any[]).map(pm => {
              return {
                personId: pm.person.id,
                personFio: pm.person.surname + '' + pm.person.name + ' ' + pm.person.name_2,
                mark: Mark.create(pm.mark?.id, pm.mark?.rating_id, pm.mark?.description, pm.mark?.presentation_id, pm.mark?.jury_id, this.ratings$.value.find(r => r.id == pm.mark?.rating_id))
              };
            });
            return reportPresentation;
          })
        )
      );
  }
}
