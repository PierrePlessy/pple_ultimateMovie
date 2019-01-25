import { PosterService } from 'src/app/providers/poster/poster.service';
import { OmdbService } from './../../providers/omdb/omdb.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  info: {};
  isFilm = true;
  seasons = [];

  constructor(private thisRouter: ActivatedRoute,
    private ombdbService: OmdbService,
    private posterService: PosterService) { }

  ngOnInit() {
    this.thisRouter.params.subscribe(params => {
      this.ombdbService.findById(params.id)
        .subscribe(res => {
          console.log(res);

          this.info = {
            title: res["Title"],
            year: res["Year"],
            rated: res["Rated"],
            poster: this.posterService.getUrl(params.id, 1500),
            plot: res["Plot"],
            genre: res["Genre"],
            runtime: res["Runtime"],
            production: res["Production"],
            actors: res["Actors"],
            awards: res["Awards"],
            imdbRating: res["imdbRating"],
            imdbVotes: res["imdbVotes"],
            website: res["Website"],
          };

          if (res["Type"] == "movie") this.isFilm = true;
          else {
            this.isFilm = false;
            this.info["totalSeasons"] = res["totalSeasons"];
            let foo = []
            for (let i = 1; i <= parseInt(this.info["totalSeasons"]); i++) {
              foo.push(this.ombdbService.getOneSeason(params.id, i));
            }
            forkJoin(foo).subscribe(response => {
              console.log(response);
              this.seasons = response;
            })
          }
        })
    })
  }

  toggleGroup(group) {
    group.show = !group.show;
  };

  isGroupShown(group) {
    return group.show;
  };

}
