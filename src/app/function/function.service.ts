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
