import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImagesComponent } from './images.component';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { ImageItemComponent } from './image-list/image-item/image-item.component';
import { ImageStartComponent } from './image-start/image-start.component';
import { ImageEditComponent } from './image-edit/image-edit.component';
import { ImagesRoutingModule } from './images-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AlbumDialogueComponent } from './image-detail/image-detail.component'
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

import { ImagePostComponent } from './image-detail/image-post/image-post.component';
import { ImagePostListComponent } from './image-detail/image-post/image-post-list/image-post-list.component';
import { ImagePostDetailComponent } from './image-detail/image-post/image-post-detail/image-post-detail.component';
import { ImagePostItemComponent } from './image-detail/image-post/image-post-list/image-post-item/image-post-item.component';
import { ImagePostEditComponent } from './image-detail/image-post/image-post-edit/image-post-edit.component';


@NgModule({
  declarations: [
    ImagesComponent,
    ImageListComponent,
    ImageDetailComponent,
    ImageItemComponent,
    ImageStartComponent,
    ImageEditComponent,
    AlbumDialogueComponent,
    ImagePostComponent,
    ImagePostListComponent,
    ImagePostDetailComponent,
    ImagePostItemComponent,
    ImagePostEditComponent,
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    ImagesRoutingModule,
    SharedModule,
  ],
})
export class ImagesModule { }
