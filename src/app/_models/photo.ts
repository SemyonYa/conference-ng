import { environment } from 'src/environments/environment';

export class Photo {
    id: number;
    name: string;
    title: string;
    likesCount: number;
    no: number;
    myLike: boolean;

    constructor(id: string, name: string, title: string, count: string, myLike: boolean, no: number) {
        this.id = Number.parseInt(id);
        this.name = name;
        this.title = title;
        this.likesCount = Number.parseInt(count);
        this.no = no;
        this.myLike = myLike;
    }

    thumb(): string {
        return environment.photoPath + this.name + '-s.jpg';
    }
    wide(): string {
        return environment.photoPath + this.name + '-m.jpg';
    }
    origin(): string {
        return environment.photoPath + this.name + '.jpg';
    }
}
