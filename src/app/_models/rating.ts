export class Rating {
    id: number;
    level: number;
    name: string;

    constructor(id: string, level: string, name: string) {
        this.id = Number.parseInt(id);
        this.level = Number.parseInt(level);
        this.name = name;
    }

    out() {
        return this.name ? this.name : this.level;
    }
}
