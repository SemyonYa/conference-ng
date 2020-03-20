import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Person } from '../_models/person';
import { BehaviorSubject } from 'rxjs';
import { PersonRole } from '../_models/person-role';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  people$ = new BehaviorSubject<Person[]>([]);
  constructor(private http: HttpClient) { }

  getPeople() {
    this.http.get(environment.api + '/people')
      .subscribe(
        (data: any[]) => { this.people$.next(data.map(p => new Person(p.id, p.surname, p.name, p.name_2, p.vocation, p.info, p.organization, p.photo, new PersonRole())))},
        (error) => { console.log('error', error)}
      );
  }
}
