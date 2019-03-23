import { Media } from './media';

export class Episode extends Media {
    runtime: string;

    constructor(episode: object) {
        super(episode);
        this.runtime = episode["Runtime"];
    }
}