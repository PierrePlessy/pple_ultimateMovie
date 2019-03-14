import { Media } from './media';

export class Movie extends Media {
    public runtime: string;
    public production: string;
    
    constructor(movie: object) {
        super(movie);
        this.runtime = movie["Runtime"];
        this.production = movie["Production"];
        this.type = movie["Type"];
    }
}