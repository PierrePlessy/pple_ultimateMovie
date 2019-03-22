import { Media } from './../../models/media';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storageApp: Storage) {
  }

  public getList() {
    return this.storageApp.get('favoris')
  }

  private isIncludes(array, media): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let bool = false;
      array.forEach(element => {
        if (element["imdbID"] == media["imdbID"]) bool = true;
      });
      resolve(bool);
    })
  }

  public add(media: Media) {
    this.storageApp.get('favoris').then(async val => {
      if (!val) {
        const fav = new Array<Media>();
        fav.push(media);
        this.storageApp.set('favoris', fav);
        return
      }
      if (await this.isIncludes(val, media)) return
      val.push(media);
      this.storageApp.set('favoris', val);
    })
  }

  public isFavoris(media: Media): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.storageApp.get('favoris').then(val => {
        if (val) resolve(this.isIncludes(val, media));
        else resolve(false);
      })
    })
  }

  public remove(media: Media) {
    this.storageApp.get('favoris').then(async val => {
      if (!val || await !this.isIncludes(val, media)) return
      val.forEach((element, index) => {
        if (element["imdbID"] == media["imdbID"]) val.splice(index, 1);;
      });
      this.storageApp.set('favoris', val);
    })
  }

  public importFavorites(list: Array<Object>) {
    console.log("import !!! ", list);
    /*const fav = new Array<Object>();
    fav.push(list);
    console.log(fav)*/
    this.storageApp.set('favoris', list);
  }
}
