import { Movie } from './../../models/movie';
import { Media } from './../../models/media';
import { HttpClientModule } from '@angular/common/http';
import { OmdbService } from './../../providers/omdb/omdb.service';
import { Component } from '@angular/core';
import { PosterService } from 'src/app/providers/poster/poster.service';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from './../../providers/storage/storage.service';
import { Series } from 'src/app/models/series';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  displayData: Array<Media>;
  public selected = 'movie';

  constructor(private ombService: OmdbService,
    private posterService: PosterService,
    private thisRouter: ActivatedRoute,
    private storage: StorageService) { }

  ngOnInit() {
    this.thisRouter.params.subscribe(params => {
      this.selected = params.type;
    })
  }

  getMovies(term) {
    this.thisRouter.params.subscribe(params => {
      this.ombService.search(term.target.value, params.type)
        .subscribe(x => {
          if(!x["Search"] || x["Search"] == []) return

          this.displayData = [];
          x["Search"].forEach(element => {
            if (this.selected == "movie") this.displayData.push(new Movie(element));
            else this.displayData.push(new Series(element))
          });

          this.displayData.forEach(async element => {
            element["isFavoris"] = await this.storage.isFavoris(element);
            console.log( element["isFavoris"])
          })
        });
    })
  }
}
