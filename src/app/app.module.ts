import { File } from '@ionic-native/file/ngx';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PosterService } from './providers/poster/poster.service';
import { OmdbService } from './providers/omdb/omdb.service';
import { StorageService } from './providers/storage/storage.service';
import { DownloadService } from './providers/download/download.service';
import { UploadService } from './providers/upload/upload.service';
import { FilePath } from '@ionic-native/file-path/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    PosterService,
    OmdbService,
    StorageService,
    DownloadService,
    UploadService,
    FilePath,
    File,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
