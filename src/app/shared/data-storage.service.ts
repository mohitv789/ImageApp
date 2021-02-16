import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, tap} from 'rxjs/operators';
import { FunctionService } from '../function/function.service';
import { Image } from '../function/images/image.model';
import { Album } from '../function/albums/album.model';
import { Profile } from '../profile/profile.model';
import { ProfileService } from '../profile/profile.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService implements OnInit{
  token: string;
  firstLoad = true;

  constructor(
    private http: HttpClient,
    private functionService: FunctionService,
    private profileService: ProfileService
  ) {}

  ngOnInit() {}
  //
  // storeImages() {
  //   const images = this.functionService.getImages();
  //   this.token = JSON.parse(localStorage.getItem('token'));
  //   var headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.token);
  //   const httpOptions = {
  //     'Content-Type': 'application/json',
  //     headers: headers_object
  //   };
  //   this.http
  //     .post(
  //       'http://localhost:8000/api/images/',
  //       images,
  //       httpOptions
  //     )
  //     .subscribe(response => {
  //       console.log(response);
  //     });
  // }

  fetchImages() {
    this.token = JSON.parse(localStorage.getItem('token'));
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.token);
    const httpOptions = {
      headers: headers_object
    };
    return this.http
      .get<Image[]>(
        'http://localhost:8000/api/images/',
        httpOptions
      )
      .pipe(
        map(images => {
          return images.map(image => {
            return {
              ...image
            };
          });
        }),
        tap(images => {
          this.functionService.setImages(images);
        })
      );
  }

  // storeAlbums() {
  //   const albums = this.functionService.getAlbums();
  //   var headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.token);
  //   const httpOptions = {
  //     'Content-Type': 'application/json',
  //     headers: headers_object
  //   };
  //   this.http
  //     .post(
  //       'http://localhost:8000/api/albums/',
  //       albums,
  //       httpOptions
  //     )
  //     .subscribe(response => {
  //       console.log(response);
  //     });
  // }

  fetchAlbums() {
    this.token = JSON.parse(localStorage.getItem('token'));
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.token);
    const httpOptions = {
      headers: headers_object
    };
    return this.http
      .get<Album[]>(
        'http://localhost:8000/api/albums/',
        httpOptions
      )
      .pipe(
        map(albums => {
          return albums.map(album => {
            return {
              ...album
            };
          });
        }),
        tap(albums => {
          this.functionService.setAlbums(albums);
        })
      );
  }


  getYourProfile() {
    this.token = JSON.parse(localStorage.getItem('token'));
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.token);
    const httpOptions = {
      headers: headers_object
    };
    return this.http
      .get<Profile>(
        'http://localhost:8000/api/profile/',
        httpOptions
      )
      .pipe(
        tap(profile => {
          this.profileService.setProfile(profile);
        })
      )
  }
}
