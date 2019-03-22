var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { StorageService } from './../storage/storage.service';
import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { File } from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
// import { csv2json } from 'csvtojson';
var UploadService = /** @class */ (function () {
    function UploadService(platform, fileChooser, androidPermissions, filePath, storage, file) {
        this.platform = platform;
        this.fileChooser = fileChooser;
        this.androidPermissions = androidPermissions;
        this.filePath = filePath;
        this.storage = storage;
        this.file = file;
    }
    UploadService.prototype.uploadFavorites = function () {
        var _this = this;
        console.log("Upload");
        this.platform.ready().then(function (readySource) {
            if (readySource == "android" || readySource == "cordova") {
                // this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(res => {
                // console.log(res.hasPermission)
                //if (res.hasPermission) {
                _this.fileChooser.open()
                    .then(function (uri) {
                    console.log(uri);
                    _this.filePath.resolveNativePath(uri)
                        .then(function (url) {
                        console.log(url);
                        //const fileReader = new File();
                        var path = url.split('/');
                        var filename = path.pop();
                        var foo = path.join("/") + "/";
                        console.log(foo, filename);
                        _this.file.readAsText(foo, filename)
                            .then(function (res) {
                            if (uri.endsWith(".json")) {
                                _this.storage.importFavorites(JSON.parse(res));
                            }
                            /*else if(uri.endsWith(".csv")) {
                              csv2json.fromFile(res).then(resJSON => {
                                this.storage.importFavorites(resJSON);
                              })
                            }*/
                        })
                            .catch(function (err) {
                            console.log("Error read file export", err);
                        });
                    });
                })
                    .catch(function (err) {
                    console.log("Error chooser", err);
                });
                /*  }
                })
                .catch(err => {
                  console.log("Permission failed : ", err);
                })*/
            }
        });
    };
    UploadService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Platform,
            FileChooser,
            AndroidPermissions,
            FilePath,
            StorageService,
            File])
    ], UploadService);
    return UploadService;
}());
export { UploadService };
//# sourceMappingURL=upload.service.js.map