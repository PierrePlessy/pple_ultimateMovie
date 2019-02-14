import { PosterService } from 'src/app/providers/poster/poster.service';
import { OmdbService } from './../../providers/omdb/omdb.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  info: {};
  isFilm = true;
  seasons = [];
  poster: String;

  constructor(private thisRouter: ActivatedRoute,
    private omdbService: OmdbService,
    private posterService: PosterService) { }

  ngOnInit() {
    this.thisRouter.params.subscribe(params => {
      this.omdbService.findById(params.id)
        .subscribe(res => {
          console.log(res);

          this.info = {
            title: res["Title"],
            year: res["Year"],
            rated: res["Rated"],
            plot: res["Plot"],
            genre: res["Genre"],
            runtime: res["Runtime"],
            production: res["Production"],
            actors: res["Actors"],
            awards: res["Awards"],
            imdbRating: res["imdbRating"],
            imdbVotes: res["imdbVotes"],
            imdbID: res["imdbID"],
            website: res["Website"],
          };

          if (res["Type"] == "movie") this.isFilm = true;
          else {
            this.isFilm = false;
            this.info["totalSeasons"] = res["totalSeasons"];
            let foo = []
            for (let i = 1; i <= parseInt(this.info["totalSeasons"]); i++) {
              //foo.push(this.omdbService.getOneSeason(params.id, i));
              foo.push({Season: i})
            }
            //forkJoin(foo).subscribe(response => {
            //  console.log(response);
            //  this.seasons = response;
            //})
            this.seasons = foo;
          }
        })
      this.poster = this.posterService.getUrl(params.id, 1500)
    })
  }

}
