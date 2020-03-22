import { Person } from './person';
import { Doc } from './doc';

export class Presentation {
    id: number;
    name: string;
    description: string;
    organization: string;
    isCurrent: boolean;

    people: Person[];
    docs: Doc[];

    constructor(id: string, name: string, description: string, organization: string, isCurrent: string) {
        this.id = Number.parseInt(id);
        this.name = name;
        this.description = description;
        this.organization = organization;
        this.isCurrent = isCurrent != '0';

        this.people = [];
        this.docs = [];
    }
}
