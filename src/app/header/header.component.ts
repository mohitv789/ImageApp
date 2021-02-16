import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  isAuthenticated = false;
  private userSub: Subscription;


  constructor(
    private authService: AuthService,
    private dataStorageService: DataStorageService,
  ) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }

  // onSaveImageData() {
  //   this.dataStorageService.storeImages();
  // }
  //
  onFetchImageData() {
    this.dataStorageService.fetchImages().subscribe();
  }
  //
  // onSaveAlbumData() {
  //   this.dataStorageService.storeAlbums();
  // }
  //
  onFetchAlbumData() {
    this.dataStorageService.fetchAlbums().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
