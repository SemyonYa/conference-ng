import { Person } from './person';

export class PersonRole {
    id: number;
    name: string;

    people: Person[];

    constructor(id: string, name: string) {
        this.id = Number.parseInt(id);
        this.name = name;

        this.people = [];
    }
}
