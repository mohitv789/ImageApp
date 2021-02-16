import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImagesComponent } from './images.component';
import { AuthGuard } from '../../auth/auth.guard';
import { ImageStartComponent } from './image-start/image-start.component';
import { ImageEditComponent } from './image-edit/image-edit.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { ImagesResolverService } from './images-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ImagesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ImageStartComponent },
      { path: 'new', component: ImageEditComponent },
      {
        path: ':id',
        component: ImageDetailComponent,
        resolve: [ImagesResolverService]
      },
      {
        path: ':id/edit',
        component: ImageEditComponent,
        resolve: [ImagesResolverService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesRoutingModule {}
