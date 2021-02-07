import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Album } from './albums/album.model';
import { Image } from './images/image.model';
import { Subscription } from 'rxjs';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Injectable()
export class FunctionService {
  usersub: Subscription;
  imagesChanged = new Subject<Image[]>();
  albumsChanged = new Subject<Album[]>();

  constructor() {}

  private images: Image[] = [];
  private albums: Album[] = [];

  setImages(images: Image[]) {
    this.images = images;
    this.imagesChanged.next(this.images.slice());
    console.log(this.albums);
    console.log(this.images);
    
  }

  getImages() {
    return this.images.slice();
  }

  getImage(index: number) {
    return this.images[index];
  }

  setAlbums(albums: Album[]) {
    this.albums = albums;
    this.albumsChanged.next(this.albums.slice());
    console.log(this.images);
    console.log(this.albums);
  }

  getAlbums() {
    return this.albums.slice();
  }

  getAlbum(index: number) {
    return this.albums[index];
  }

  addToAlbum(index: number,albumChosen:Album) {
    albumChosen.images.push(this.images[index])
    this.albumsChanged.next(this.albums.slice());
  }

}
