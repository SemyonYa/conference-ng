export class Person {
    id: number;
    surname: string;
    name: string;
    name2: string;
    vocation: string;
    info: string;
    organization: string;
    photo: string;

    constructor(id: string, surname: string, name: string, name2: string, vocation: string, info: string, organization: string, photo: string) {
        this.id - Number.parseInt(id);
        this.surname = surname;
        this.name = name;
        this.name2 = name2;
        this.vocation = vocation;
        this.info = info;
        this.organization = organization;
        this.photo = photo;
    }
}
