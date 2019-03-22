import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { StorageService } from '../storage/storage.service';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { default as json2csv } from 'json2csv';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(private platform: Platform,
    private fileTransfer: FileTransfer,
    private androidPermissions: AndroidPermissions,
    private storage: StorageService) {
    androidPermissions = new AndroidPermissions();
  }

  export(file: string, ext: string, readySource: string) {
    if (readySource == "android" || readySource == "cordova") {
      const fileRoot = new File();
      this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(res => {
        if (res.hasPermission) {
          const upload = this.fileTransfer.create();
          upload.download(file, `${fileRoot.externalRootDirectory}/Download/favorites.${ext}`)
            .then(foo => {
              console.log("Download ok");
            })
        }
      })
    }
    else if (readySource == "windows" || readySource == "dom" || readySource == "core") {
      const a = document.createElement('a');
      a.href = file;
      a.download = `favorites.${ext}`;
      a.click();
    }
  }

  exportJSON() {
    this.platform.ready().then(readySource => {
      let file = 'data:text/json;charser=utf8,';
      this.storage.getList().then(favList => {
        console.log(favList)
        favList.forEach(element => {
          file += `${JSON.stringify(element)}\n`;
        });
        console.log(file)
       this.export(file, 'json', readySource);
      })
    })
  }

  exportCSV() {
    this.platform.ready().then(readySource => {
      this.storage.getList().then(favList => {
        const file = `data:text/csv;charset=utf8,${json2csv.parse(favList)}`;
        this.export(file, 'csv', readySource);
      })
    })
  }

}
