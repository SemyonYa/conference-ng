import { Time } from '@angular/common';
import { Presentation } from './presentation';

export class Schedule {
    id: number;
    name: string;
    date: Date;
    time: Time;
    duration: number;
    place: string;

    presentations: Presentation[];

    constructor(id: string, name: string, date: string, time: string, duration: string, place: string) {
        this.id = Number.parseInt(id);
        this.name = name;
        this.date = new Date(date);

        const timeR = time.split(':');
        this.time = { hours: Number.parseInt(timeR[0]), minutes: Number.parseInt(timeR[1]) }
        this.duration = Number.parseInt(duration);
        this.place = place;

        this.presentations = [];
    }
}
