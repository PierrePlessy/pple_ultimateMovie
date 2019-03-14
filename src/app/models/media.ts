export class Media {
    public title: string;
    public year: Date;
    public rated: string;
    public plot: string;
    public genre: string;
    public actors: string;
    public awards: string;
    public imdbRating: string;
    public imdbVotes: string;
    public imdbID: string;
    public website: string;
    public isFavoris: boolean;
    public poster: string;
    public type = "media";

    constructor(media: object) {
        this.title = media["Title"];
        this.year = media["Year"];
        this.rated = media["Rated"];
        this.plot = media["Plot"];
        this.genre = media["Genre"];
        this.actors = media["Actors"];
        this.awards = media["Awards"];
        this.imdbRating = media["imdbRating"];
        this.imdbVotes = media["imdbVotes"];
        this.imdbID = media["imdbID"];
        this.website = media["Website"] && media["Website"] != "N/A" ? media["Website"]  : "";
        this.poster = media["Poster"] && media["Poster"] != "N/A" ? media["Poster"] : "https://cbdamericanshaman.com/site_assets/shared/img/no_image.png";
    }
}