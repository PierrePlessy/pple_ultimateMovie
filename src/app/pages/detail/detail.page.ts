import { DownloadService } from './../../providers/download/download.service';
import { Series } from './../../models/series';
import { Movie } from './../../models/movie';
import { Media } from './../../models/media';
import { PosterService } from 'src/app/providers/poster/poster.service';
import { OmdbService } from './../../providers/omdb/omdb.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from './../../providers/storage/storage.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  info: Media;
  isSerie = true;
  seasons: Array<{ seasonNb: number }>;
  poster: string;
  isFavori = false;
  imdbId: string;

  constructor(private thisRouter: ActivatedRoute,
    private omdbService: OmdbService,
    private posterService: PosterService,
    private storage: StorageService,
    private download: DownloadService) { }

  ngOnInit() {
    this.thisRouter.params.subscribe(params => {
      this.omdbService.findById(params.id)
        .subscribe(async res => {
          if (res["Type"] == "movie") {
            this.isSerie = false;
            this.info = new Movie(res);
          }
          else {
            this.info = new Series(res);
            this.isSerie = true;
            this.seasons = [];
            for (let i = 1; i <= this.info["totalSeasons"]; i++) {
              this.seasons.push({ seasonNb: i })
            }
            //forkJoin(foo).subscribe(response => {
            //  console.log(response);
            //  this.seasons = response;
            //})
          }
          this.storage.isFavoris(this.info)
            .then(isFav => {
              console.log(isFav)
              this.isFavori = isFav;
            })
        })
      this.poster = this.posterService.getUrl(params.id, 1500)
    })
  }

  addFavoris() {
    this.storage.add(this.info);
    this.isFavori = true;
  }

  removeFavoris() {
    this.storage.remove(this.info);
    this.isFavori = false;
  }

  downloadPoster() {
    this.download.downloadPoster(this.poster, this.info.title)
  }

}
