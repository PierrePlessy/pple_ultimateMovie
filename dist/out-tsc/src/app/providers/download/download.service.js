var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { StorageService } from '../storage/storage.service';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { default as json2csv } from 'json2csv';
var DownloadService = /** @class */ (function () {
    function DownloadService(platform, fileTransfer, androidPermissions, storage) {
        this.platform = platform;
        this.fileTransfer = fileTransfer;
        this.androidPermissions = androidPermissions;
        this.storage = storage;
        androidPermissions = new AndroidPermissions();
    }
    DownloadService.prototype.export = function (file, ext, readySource) {
        var _this = this;
        if (readySource == "android" || readySource == "cordova") {
            var fileRoot_1 = new File();
            this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(function (res) {
                if (res.hasPermission) {
                    var upload = _this.fileTransfer.create();
                    upload.download(file, fileRoot_1.externalRootDirectory + "/Download/favorites." + ext);
                }
            });
        }
        else if (readySource == "windows" || readySource == "dom" || readySource == "core") {
            var a = document.createElement('a');
            a.href = file;
            a.download = "favorites." + ext;
            a.click();
        }
    };
    DownloadService.prototype.exportJSON = function () {
        var _this = this;
        this.platform.ready().then(function (readySource) {
            var file = 'data:text/json;charser=utf8,';
            _this.storage.getList().then(function (favList) {
                favList.forEach(function (element) {
                    file += JSON.stringify(element) + "\n";
                });
                _this.export(file, 'json', readySource);
            });
        });
    };
    DownloadService.prototype.exportCSV = function () {
        var _this = this;
        this.platform.ready().then(function (readySource) {
            _this.storage.getList().then(function (favList) {
                var file = "data:text/csv;charset=utf8," + json2csv.parse(favList);
                _this.export(file, 'csv', readySource);
            });
        });
    };
    DownloadService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Platform,
            FileTransfer,
            AndroidPermissions,
            StorageService])
    ], DownloadService);
    return DownloadService;
}());
export { DownloadService };
//# sourceMappingURL=download.service.js.map