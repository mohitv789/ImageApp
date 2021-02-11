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
import { ProfileComponent } from './profile/profile.component';
import { ProfileStartComponent } from './profile/profile-start/profile-start.component';
import { ProfileDetailComponent } from './profile/profile-detail/profile-detail.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { ImagePostComponent } from './function/image-post/image-post.component';
import { ImagePostEditComponent } from './function/image-post/image-post-edit/image-post-edit.component';
import { ImagePostDetailComponent } from './function/image-post/image-post-detail/image-post-detail.component';




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
    { path: 'image-post', component: ImagePostComponent, children: [
      { path: 'new', component: ImagePostEditComponent },
      { path: ':id', component: ImagePostDetailComponent },
      { path: ':id/edit', component: ImagePostEditComponent },
      ] },
    ]
  },
    { path: 'profile', component: ProfileComponent, children: [
      { path: '', component: ProfileStartComponent },
      { path: ':id', component: ProfileDetailComponent },
      { path: ':id/edit', component: ProfileEditComponent },
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
