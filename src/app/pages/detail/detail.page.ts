import { PosterService } from 'src/app/providers/poster/poster.service';
import { OmdbService } from './../../providers/omdb/omdb.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(private thisRouter : ActivatedRoute ,private ombdbService : OmdbService, private posterService : PosterService) { }

  ngOnInit() {
    this.thisRouter.params.subscribe(params => {
      this.ombdbService.findById(params.id)
        .subscribe(res => {
          console.log(res);
          
        })
    })
    
  }

}
