import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { ProfileStartComponent } from './profile-start/profile-start.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';



@NgModule({
  declarations: [
    ProfileComponent,
    ProfileStartComponent,
    ProfileDetailComponent,
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    ProfileRoutingModule,
    SharedModule,
  ],
})
export class ProfileModule { }
