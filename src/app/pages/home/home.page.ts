import { HttpClientModule } from '@angular/common/http';
import { OmdbService } from './../../providers/omdb/omdb.service';
import { Component } from '@angular/core';
import { PosterService } from 'src/app/providers/poster/poster.service';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from './../../providers/storage/storage.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  displayData: [{}];
  public selected = 'movie';

  constructor(private ombService: OmdbService,
    private posterService: PosterService,
    private thisRouter: ActivatedRoute,
    private storage: StorageService) { }

  ngOnInit() {
    this.displayData = [{}];
    this.thisRouter.params.subscribe(params => {
      this.selected = params.type;
    })
  }

  getMovies(term) {
    this.thisRouter.params.subscribe(params => {
      this.ombService.search(term.target.value, params.type)
        .subscribe(x => {
          this.displayData = x["Search"];
          this.displayData.forEach(async element => {
            element["isFavoris"] = await this.storage.isFavoris(element["imdbID"]);
          })
        });
    })
  }
}
