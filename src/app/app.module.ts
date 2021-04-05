import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { FunctionComponent } from './function/function.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core.module'
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { ProfileComponent } from './profile/profile.component';
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
