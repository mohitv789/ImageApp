import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Album } from './albums/album.model';
import { Image } from './images/image.model';
import { Observable, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class FunctionService {
  imagesChanged = new Subject<Image[]>();
  albumsChanged = new Subject<Album[]>();
  albumChosen = new Subject<Album>();
  constructor(public dialog: MatDialog) {}

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

  addToAlbum(image:Image, album: Album) {
    album.images.push(image);
    this.albumChosen.next(album);
    this.albumsChanged.next(this.albums.slice());
  }
}
