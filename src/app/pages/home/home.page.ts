import { HttpClientModule } from '@angular/common/http';
import { OmdbService } from './../../providers/omdb/omdb.service';
import { Component } from '@angular/core';
import { PosterService } from 'src/app/providers/poster/poster.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  displayData: [{}];

  constructor(private ombService: OmdbService, 
    private posterService: PosterService,
    public nav : NavController) { }

  ngOnInit() {
    this.displayData = [{}];
  }

  getMovies(term) {
    this.ombService.search(term.target.value, "")
      .subscribe(x => {
        console.log(x["Search"]);
        this.displayData = x["Search"];
      });
  }

  cardToDetail(id) {
    this.nav.navigateForward(['detail', {id :id}])
  }
}
