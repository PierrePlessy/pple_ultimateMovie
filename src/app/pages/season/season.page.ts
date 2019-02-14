import { OmdbService } from './../../providers/omdb/omdb.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-season',
  templateUrl: './season.page.html',
  styleUrls: ['./season.page.scss'],
})
export class SeasonPage implements OnInit {
  season: String;
  title: String;
  episodes: [];
  constructor(private thisRouter: ActivatedRoute,
    private omdbService : OmdbService) { }

  ngOnInit() {
    this.thisRouter.params.subscribe(params => {
      this.omdbService.getOneSeason(params.id, params.season)
        .subscribe(res => {
          this.title = res["Title"];
          this.season = res["Season"]
          this.episodes = res["Episodes"];
        })
      
        //for (let i = 1; i <= parseInt(this.info["totalSeasons"]); i++) {
          //foo.push(this.omdbService.getOneSeason(params.id, i));
         // foo.push({Season: i})
       // }
        //forkJoin(foo).subscribe(response => {
        //  console.log(response);
        //  this.seasons = response;
        //})
    })
  }

}
