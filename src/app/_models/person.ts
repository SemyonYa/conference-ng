import { environment } from 'src/environments/environment';

export class Person {
    id: number;
    surname: string;
    name: string;
    name2: string;
    vocation: string;
    info: string;
    organization: string;
    thumb: string;
    photo: string;

    // mark: Mark;

    constructor(id: string, surname: string, name: string, name2: string, vocation: string, info: string, organization: string, photo: string) {
        this.id = Number.parseInt(id);
        this.surname = surname;
        this.name = name;
        this.name2 = name2;
        this.vocation = vocation;
        this.info = info;
        this.organization = organization;
        this.photo = photo ? environment.imagePath + photo : '/assets/svg/person.svg';
        this.thumb = photo ? environment.imagePath + '____' + photo : '/assets/svg/person.svg';
    }

    surnameN() {
        return this.surname + ' ' + this.name.substr(0, 1) + '.';
    }

    fioFull() {
        return `${this.surname} ${this.name} ${this.name2}`;
    }
}
