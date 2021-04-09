import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Album } from './albums/album.model';
import { Image } from './images/image.model';
import { Post } from './images/image-detail/image-post/post.model';
import { Observable, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class FunctionService {

  imagesChanged = new Subject<Image[]>();
  albumsChanged = new Subject<Album[]>();
  postsChanged = new Subject<Post[]>();
  albumChosen = new Subject<Album>();

  constructor(public dialog: MatDialog) {}

  private images: Image[] = [];
  private albums: Album[] = [];
  private posts: Post[] = [];

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

  addImage(image: Image) {
    this.images.push(image);
    this.imagesChanged.next(this.images.slice());
  }

  updateImage(index: number, newImage: Image) {
    this.images[index] = newImage;
    this.imagesChanged.next(this.images.slice());
  }

  deleteImage(index: number) {
    this.images.splice(index, 1);
    this.imagesChanged.next(this.images.slice());
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

  addAlbum(album: Album) {
    this.albums.push(album);
    this.albumsChanged.next(this.albums.slice());
  }

  updateAlbum(index: number, newAlbum: Album) {
    this.albums[index] = newAlbum;
    this.albumsChanged.next(this.albums.slice());
  }

  deleteAlbum(index: number) {
    this.albums.splice(index, 1);
    this.albumsChanged.next(this.albums.slice());
  }

  setPosts(posts: Post[]) {
    this.posts = posts;
    this.postsChanged.next(this.posts.slice());
  }

  getPosts() {
    return this.posts.slice();
  }

  getPost(index: number) {
    return this.posts[index];
  }
}
