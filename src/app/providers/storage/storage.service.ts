import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storageApp: Storage) {
    console.log('Hello StorageProvider Provider');
  }

  public async getList() {
    return await this.storageApp.get('favoris')
  }

  public add(id: string) {
    this.storageApp.get('favoris').then(val => {
      if (!val) {
        const fav = [];
        fav.push(id);
        this.storageApp.set('favoris', fav);
        return
      }
      if (val.includes(id)) return
      val.push(id);
      this.storageApp.set('favoris', val);
    })
  }

  public isFavoris(id: string) : Promise<boolean>{
    return new Promise((resolve, reject) => {
      this.storageApp.get('favoris').then(val => {
        if(val) resolve(val.includes(id));
        else resolve(false);
      })
    })
  }

  public remove(id: string) {
    this.storageApp.get('favoris').then(val => {
      if (!val || !val.includes(id)) return
      val.splice(val.indexOf(id), 1);
      this.storageApp.set('favoris', val);
    })
  }
}
