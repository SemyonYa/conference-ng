import { Section } from './section';
import { Presentation } from './presentation';

export class PresentationCollection {
    sections: Section[];
    zero: Presentation[];

    constructor() {
        this.sections = [];
        this.zero = [];
    }
}
