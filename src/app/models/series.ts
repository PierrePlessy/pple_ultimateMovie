import { Media } from './media';

export class Series extends Media {
    public totalSeasons : number;

    constructor(series: object) {
        super(series);
        this.totalSeasons = parseInt(series["totalSeasons"]);
        this.type = series["Type"];
    }
}