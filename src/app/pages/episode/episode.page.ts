import { Component, OnInit } from '@angular/core';
import { OmdbService } from './../../providers/omdb/omdb.service';
import { ActivatedRoute } from '@angular/router';
import { Episode } from 'src/app/models/episode';


@Component({
  selector: 'app-episode',
  templateUrl: './episode.page.html',
  styleUrls: ['./episode.page.scss'],
})
export class EpisodePage implements OnInit {
  info: Episode;
  constructor(private thisRouter: ActivatedRoute,
    private omdbService : OmdbService) { }

  ngOnInit() {
    this.thisRouter.params.subscribe(params => {
      this.omdbService.findById(params.id)
        .subscribe(res => {
          this.info = new Episode(res);
        })
    })
  }

}
