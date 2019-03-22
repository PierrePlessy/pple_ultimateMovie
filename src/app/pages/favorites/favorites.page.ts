import { UploadService } from './../../providers/upload/upload.service';
import { DownloadService } from './../../providers/download/download.service';
import { Media } from './../../models/media';
import { Component, OnInit } from '@angular/core';
import { StorageService } from './../../providers/storage/storage.service';
import { AlertController, Platform } from '@ionic/angular';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  displayData: Array<Media>;
  private permissions: AndroidPermissions = new AndroidPermissions();

  constructor(private storage: StorageService,
    private alertController: AlertController,
    private download: DownloadService,
    private upload: UploadService) { }

  ngOnInit() {
    this.getList()
  }

  ionViewDidEnter() {
    this.getList()
  }

  getList() {
    this.storage.getList().then(res => {
      this.displayData = res;
    })
  }

  async chooseExport() {
    const alert = await this.alertController.create({
      header: "Export",
      message: "Choose your format for export !",
      inputs: [
        {
          name: 'JSONRadio',
          type: 'radio',
          label: 'JSON',
          value: 'json',
          checked: true
        },
        {
          name: 'csvRadio',
          type: 'radio',
          label: 'CSV',
          value: 'csv'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data: string) => {
            if (data == 'csv') {
              this.download.exportCSV();
            }
            else {
              this.download.exportJSON();
            }
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  importFavorites() {
    this.upload.uploadFavorites();
  }
}
