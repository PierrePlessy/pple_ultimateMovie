import { Media } from './../../models/media';
import { Component, OnInit } from '@angular/core';
import { StorageService } from './../../providers/storage/storage.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  displayData: Array<Media>;
  constructor(private storage: StorageService) { }

  ngOnInit() {
   this.getList()
  }

  ionViewDidEnter(){
   this.getList()
  }

  getList() {
    this.storage.getList().then(res => {
      this.displayData = res;
    })
  }

}
