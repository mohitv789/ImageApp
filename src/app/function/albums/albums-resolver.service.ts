import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Album } from './album.model';
import { DataStorageService } from '../../shared/data-storage.service';
import { FunctionService } from '../function.service';

@Injectable({ providedIn: 'root' })
export class AlbumsResolverService implements Resolve<Album[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private functionService: FunctionService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const albums = this.functionService.getAlbums();
    if (albums.length === 0) {
      return this.dataStorageService.fetchAlbums();
    } else {
      return albums;
    }
  }
}
