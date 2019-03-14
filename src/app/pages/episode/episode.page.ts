import { Component, OnInit } from '@angular/core';
import { OmdbService } from './../../providers/omdb/omdb.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-episode',
  templateUrl: './episode.page.html',
  styleUrls: ['./episode.page.scss'],
})
export class EpisodePage implements OnInit {
  info = {}
  constructor(private thisRouter: ActivatedRoute,
    private omdbService : OmdbService) { }

  ngOnInit() {
    this.thisRouter.params.subscribe(params => {
      this.omdbService.findById(params.id)
        .subscribe(res => {
          this.info = {
            title: res["Title"],
            year: res["Year"],
            rated: res["Rated"],
            plot: res["Plot"],
            genre: res["Genre"],
            runtime: res["Runtime"],
            actors: res["Actors"],
            awards: res["Awards"],
            imdbRating: res["imdbRating"],
            imdbVotes: res["imdbVotes"],
            imdbID: res["imdbID"],
          };
        })
    })
  }

}
