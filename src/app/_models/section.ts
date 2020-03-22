import { Presentation } from './presentation';

export class Section {
    id: number;
    name: string;

    presentations: Presentation[];

    constructor(id: string, name: string) {
        this.id = Number.parseInt(id);
        this.name = name;
        this.presentations = [];
    }
}
