import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { StorageService } from './../storage/storage.service';
import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { File } from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';

// import { csv2json } from 'csvtojson';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private platform: Platform,
    private fileChooser: FileChooser,
    private androidPermissions: AndroidPermissions,
    private filePath: FilePath,
    private storage: StorageService,
    private file : File) { }

  uploadFavorites() {
    console.log("Upload");
    this.platform.ready().then(readySource => {
      if (readySource == "android" || readySource == "cordova") {
        this.fileChooser.open()
          .then(uri => {
            this.filePath.resolveNativePath(uri)
              .then(url => {
                const path = url.split('/');
                const filename = path.pop();
                const directory = `${path.join("/")}/`
                this.file.readAsText(directory, filename)
                  .then(res => {
                    if (url.endsWith(".json")) {
                      const newFav = new Array<Object>();
                      let foo = res.split("\n")
                      console.log(foo)
                      foo.forEach(element => {
                        if(element) newFav.push(JSON.parse(element))
                      })
                      console.log(newFav)
                      this.storage.importFavorites(newFav);
                    }
                    /*else if(uri.endsWith(".csv")) {
                      csv2json.fromFile(res).then(resJSON => {
                        this.storage.importFavorites(resJSON);
                      })
                    }*/
                  })
                  .catch(err => {
                    console.log("Error read file export", err);
                  })
                
             })

          })
          .catch(err => {
            console.log("Error chooser", err)
          })
      }
    })
  }
}
