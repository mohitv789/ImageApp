import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Image } from './image.model';
import { DataStorageService } from '../../shared/data-storage.service';
import { FunctionService } from '../function.service';

@Injectable({ providedIn: 'root' })
export class ImagesResolverService implements Resolve<Image[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private functionService: FunctionService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const images = this.functionService.getImages();
    if (images.length === 0) {
      return this.dataStorageService.fetchImages();
    } else {
      return images;
    }
  }
}
