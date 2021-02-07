import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { AlbumDetailComponent } from './function/albums/album-detail/album-detail.component';
import { AlbumEditComponent } from './function/albums/album-edit/album-edit.component';
import { AlbumListComponent } from './function/albums/album-list/album-list.component';
import { AlbumStartComponent } from './function/albums/album-start/album-start.component';
import { AlbumsComponent } from './function/albums/albums.component';
import { FunctionComponent } from './function/function.component';
import { ImageDetailComponent } from './function/images/image-detail/image-detail.component';
import { ImageEditComponent } from './function/images/image-edit/image-edit.component';
import { ImageStartComponent } from './function/images/image-start/image-start.component';
import { ImagesComponent } from './function/images/images.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/app', pathMatch: 'full' },
  { path: 'app', component: FunctionComponent, children: [
    { path: 'images', component: ImagesComponent, children: [
      { path: '', component: ImageStartComponent },
      { path: 'new', component: ImageEditComponent },
      { path: ':id', component: ImageDetailComponent },
      { path: ':id/edit', component: ImageEditComponent },
    ] },
    { path: 'albums', component: AlbumsComponent, children: [
      { path: '', component: AlbumStartComponent },
      { path: 'new', component: AlbumEditComponent },
      { path: ':id', component: AlbumDetailComponent },
      { path: ':id/edit', component: AlbumEditComponent },
    ] },
  ] },
  {
    path: 'auth',
    loadChildren: () =>AuthModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
