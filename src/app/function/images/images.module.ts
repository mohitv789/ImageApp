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


@NgModule({
  declarations: [
    ImagesComponent,
    ImageListComponent,
    ImageDetailComponent,
    ImageItemComponent,
    ImageStartComponent,
    ImageEditComponent,
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    ImagesRoutingModule,
    SharedModule,
  ],
})
export class ImagesModule { }
