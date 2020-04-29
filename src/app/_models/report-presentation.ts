import { Mark } from './mark';

export class ReportPresentation {
    presentationId: number;
    presentationName: string;
    personMarks: {
        personId: number;
        personFio: string;
        mark: Mark;
    }[];

    constructor() {
        this.personMarks = [];
    }
}
