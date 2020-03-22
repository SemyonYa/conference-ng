import { Schedule } from './schedule';

export class ScheduleDate {
    date: Date;
    schedules: Schedule[];

    constructor(date: string) {
        this.date = new Date(date);
        this.schedules = [];
    }
}
