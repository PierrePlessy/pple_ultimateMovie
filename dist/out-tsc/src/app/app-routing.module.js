var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';
var routes = [
    // { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
    { path: '', redirectTo: 'tabs/home/movie', pathMatch: 'full' },
    //{ path: 'home/:type', loadChildren: './pages/home/home.module#HomePageModule' },
    { path: 'detail/:id', loadChildren: './pages/detail/detail.module#DetailPageModule' },
    { path: 'season/:id/:season', loadChildren: './pages/season/season.module#SeasonPageModule' },
    { path: 'episode/:id', loadChildren: './pages/episode/episode.module#EpisodePageModule' },
    { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
                IonicStorageModule.forRoot()
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map