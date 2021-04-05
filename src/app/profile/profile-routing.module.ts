import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { ProfileResolverService } from './profile-resolver.service'
import { ProfileComponent } from './profile.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { ProfileStartComponent } from './profile-start/profile-start.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ProfileStartComponent },
      { path: 'new', component: ProfileEditComponent },
      {
        path: ':id',
        component: ProfileDetailComponent,
        resolve: [ProfileResolverService]
      },
      {
        path: ':id/edit',
        component: ProfileEditComponent,
        resolve: [ProfileResolverService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
