export class Mark {
    id: number;
    ratingId: number;
    description: string;

    constructor(id: string, rating_id: string, description: string) {
        this.id = Number.parseInt(id);
        this.ratingId = Number.parseInt(rating_id);
        this.description = description;
    }
}
