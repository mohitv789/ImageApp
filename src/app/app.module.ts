import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { FunctionComponent } from './function/function.component';
import { ImagesComponent } from './function/images/images.component';
import { ImageListComponent } from './function/images/image-list/image-list.component';
import { ImageDetailComponent } from './function/images/image-detail/image-detail.component';
import { ImageItemComponent } from './function/images/image-list/image-item/image-item.component';
import { ImageStartComponent } from './function/images/image-start/image-start.component';
import { ImageEditComponent } from './function/images/image-edit/image-edit.component';
import { AlbumsComponent } from './function/albums/albums.component';
import { AlbumListComponent } from './function/albums/album-list/album-list.component';
import { AlbumItemComponent } from './function/albums/album-list/album-item/album-item.component';
import { AlbumStartComponent } from './function/albums/album-start/album-start.component';
import { AlbumDetailComponent } from './function/albums/album-detail/album-detail.component';
import { AlbumEditComponent } from './function/albums/album-edit/album-edit.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core.module'
import { DropdownDirective } from './shared/dropdown.directive';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { ProfileComponent } from './profile/profile.component';
import { ImagePostComponent } from './function/image-post/image-post.component';
import { ImagePostListComponent } from './function/image-post/image-post-list/image-post-list.component';
import { ImagePostDetailComponent } from './function/image-post/image-post-detail/image-post-detail.component';
import { ImagePostItemComponent } from './function/image-post/image-post-list/image-post-item/image-post-item.component';
import { ImagePostEditComponent } from './function/image-post/image-post-edit/image-post-edit.component';
import { ProfileDetailComponent } from './profile/profile-detail/profile-detail.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { ProfileStartComponent } from './profile/profile-start/profile-start.component';
import { MatDialogRef,MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { AlbumDialogueComponent } from './function/images/image-detail/image-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FunctionComponent,
    ProfileComponent,
    ImagePostComponent,
    ImagePostListComponent,
    ImagePostDetailComponent,
    ImagePostItemComponent,
    ImagePostEditComponent,
    ProfileDetailComponent,
    ProfileEditComponent,
    ProfileStartComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatCarouselModule,
    MatDialogModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    {provide: MatDialogRef, useValue: {hasBackdrop: false}},
    {provide: MAT_DIALOG_DATA,useValue: {}}// Add any data you wish to test if it is passed/used correctly
  ],
  entryComponents: [
    AlbumDialogueComponent
  ],
})
export class AppModule { }
