import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlbumsComponent } from './albums.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumItemComponent } from './album-list/album-item/album-item.component';
import { AlbumStartComponent } from './album-start/album-start.component';
import { AlbumEditComponent } from './album-edit/album-edit.component';
import { AlbumsRoutingModule } from './albums-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumListComponent,
    AlbumDetailComponent,
    AlbumItemComponent,
    AlbumStartComponent,
    AlbumEditComponent,
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    AlbumsRoutingModule,
    SharedModule,
    MatExpansionModule,
  ]
})
export class AlbumsModule { }
