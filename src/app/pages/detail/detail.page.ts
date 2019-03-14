import { PosterService } from 'src/app/providers/poster/poster.service';
import { OmdbService } from './../../providers/omdb/omdb.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { StorageService } from './../../providers/storage/storage.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  info: {};
  isSerie = true;
  seasons = [];
  poster: String;
  isFavori = false;
  imdbId: String;

  constructor(private thisRouter: ActivatedRoute,
    private omdbService: OmdbService,
    private posterService: PosterService,
    private storage: StorageService) { }

  ngOnInit() {
    this.thisRouter.params.subscribe(params => {
      this.omdbService.findById(params.id)
        .subscribe(async res => {
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
          this.imdbId = res["imdbID"];
          this.storage.isFavoris(this.info["imdbID"])
            .then(isFav => {
              this.isFavori = isFav;
            })
          if (res["Type"] == "movie") this.isSerie = false;
          else {
            this.isSerie = true;
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
          console.log(this.isFavori)
        })
      this.poster = this.posterService.getUrl(params.id, 1500)
    })
  }

  addFavoris(id) {
    console.log("New Favori", id);
    this.storage.add(id);
    this.isFavori = true;
  }

  removeFavoris(id) {
    console.log("Delete Favori", id);
    this.storage.remove(id);
    this.isFavori = false;
  }

}
