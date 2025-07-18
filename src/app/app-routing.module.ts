// import { AlbumDetailComponent } from './function/albums/album-detail/album-detail.component';
// import { AlbumEditComponent } from './function/albums/album-edit/album-edit.component';
// import { AlbumListComponent } from './function/albums/album-list/album-list.component';
// import { AlbumStartComponent } from './function/albums/album-start/album-start.component';
// import { AlbumsComponent } from './function/albums/albums.component';
// import { FunctionComponent } from './function/function.component';
// import { ImageDetailComponent } from './function/images/image-detail/image-detail.component';
// import { ImageEditComponent } from './function/images/image-edit/image-edit.component';
// import { ImageStartComponent } from './function/images/image-start/image-start.component';
// import { ImagesComponent } from './function/images/images.component';
// import { ProfileComponent } from './profile/profile.component';
// import { ProfileStartComponent } from './profile/profile-start/profile-start.component';
// import { ProfileDetailComponent } from './profile/profile-detail/profile-detail.component';
// import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
// import { ImagePostComponent } from './function/image-post/image-post.component';
// import { ImagePostEditComponent } from './function/image-post/image-post-edit/image-post-edit.component';
// import { ImagePostDetailComponent } from './function/image-post/image-post-detail/image-post-detail.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { ImagesModule } from "./function/images/images.module"
import { AlbumsModule } from "./function/albums/albums.module"
import { ProfileModule } from "./profile/profile.module"

const appRoutes: Routes = [

    { path: "", redirectTo: "/images", pathMatch: "full" },

    {
      path: "images",
      loadChildren: () =>
        import("./function/images/images.module").then(
          m => m.ImagesModule
        )
    },

    {
      path: "albums",
      loadChildren: () =>
        import("./function/albums/albums.module").then(
          m => m.AlbumsModule
        )
    },
    //
    {
      path: "profile",
      loadChildren: () =>
        import("./profile/profile.module").then(
          m => m.ProfileModule
        )
    },

    {
      path: "auth",
      loadChildren: () => import("./auth/auth.module").then(
        m => m.AuthModule
      )
    }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
