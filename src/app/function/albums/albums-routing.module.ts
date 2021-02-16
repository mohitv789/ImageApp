import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../auth/auth.guard';
import { AlbumsComponent } from './albums.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumItemComponent } from './album-list/album-item/album-item.component';
import { AlbumStartComponent } from './album-start/album-start.component';
import { AlbumEditComponent } from './album-edit/album-edit.component';
import { AlbumsResolverService } from './albums-resolver.service'

const routes: Routes = [
  {
    path: '',
    component: AlbumsComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: AlbumStartComponent },
      { path: 'new', component: AlbumEditComponent },
      {
        path: ':id',
        component: AlbumDetailComponent,
        resolve: [AlbumsResolverService]
      },
      {
        path: ':id/edit',
        component: AlbumEditComponent,
        resolve: [AlbumsResolverService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule {}
