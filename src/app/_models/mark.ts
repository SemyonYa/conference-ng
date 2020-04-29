import { Rating } from './rating';

export class Mark {
    id: number;
    ratingId: number;
    description: string;
    presentationId: number;
    juryId: number;

    rating: Rating;

    constructor(presentationId: number, juryId: number) {
        this.id = 0;
        this.ratingId = 0;
        this.description = '';
        this.presentationId = presentationId;
        this.juryId = juryId;
        this.rating = null;
    }
    
    static create(id: string, rating_id: string, description: string, presentationId: number, juryId: number, rating: Rating = null) {
        let mark = new Mark(presentationId, juryId);
        mark.id = Number.parseInt(id);
        mark.ratingId = Number.parseInt(rating_id);
        mark.description = description;
        mark.juryId = juryId;
        mark.rating = rating;
        return mark;
    }
}
