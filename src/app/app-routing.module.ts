import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { IonicStorageModule } from '@ionic/storage';

const routes: Routes = [
 // { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: '', redirectTo: 'tabs/home/movie', pathMatch: 'full' },
  //{ path: 'home/:type', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'detail/:id', loadChildren: './pages/detail/detail.module#DetailPageModule' },
  { path: 'season/:id/:season', loadChildren: './pages/season/season.module#SeasonPageModule' },
  { path: 'episode/:id', loadChildren: './pages/episode/episode.module#EpisodePageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  //{ path: 'favorites', loadChildren: './pages/favorites/favorites.module#FavoritesPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
    IonicStorageModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
