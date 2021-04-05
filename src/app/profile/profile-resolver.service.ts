import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Profile } from './profile.model';
import { DataStorageService } from '../shared/data-storage.service';
import { ProfileService } from './profile.service';

@Injectable({ providedIn: 'root' })
export class ProfileResolverService implements Resolve<Profile> {
  constructor(
    private dataStorageService: DataStorageService,
    private profileService: ProfileService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const profile = this.profileService.getProfile();
    if (!profile) {
      return this.dataStorageService.getProfileFeed();
    } else {
      return profile;
    }
  }
}
