import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, tap} from 'rxjs/operators';
import { FunctionService } from '../function/function.service';
import { Image } from '../function/images/image.model';
import { Album } from '../function/albums/album.model';
import { Post } from '../function/images/image-detail/image-post/post.model';
import { Profile } from '../profile/profile.model';
import { ProfileService } from '../profile/profile.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class DataStorageService implements OnInit{
  token: string;
  firstLoad = true;

  constructor(
    private http: HttpClient,
    private functionService: FunctionService,
    private profileService: ProfileService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.get_token();
    console.log(this.authService.get_token());

  }

  fetchImages() {
    this.token = JSON.parse(localStorage.getItem('access'));
    const httpOptions = {
      headers: new HttpHeaders(
      {
         'Authorization': 'Bearer ' + this.token,
         'Content-Type': 'application/json'
      })
    }
    console.log(httpOptions)
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
    )


  }

  storeImage(id: number) {
    const image = this.functionService.getImage(id);
    this.token = JSON.parse(localStorage.getItem('access'));
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.token);
    const httpOptions = {
      method: "post",
      'Content-Type': 'application/json',
      headers: headers_object
    };
    console.log(httpOptions);
    this.http
      .put(
        'http://localhost:8000/api/images/' + id + '/',
        image,
        httpOptions
      )
      .subscribe(response => {
        console.log(response);
      });
  }
  fetchAlbums() {

    let token = localStorage.getItem('access');
    if (token) {
      const httpOptions = {
        headers: new HttpHeaders(
        {
           'Authorization': 'Bearer ' + this.token,
           'Content-Type': 'application/json'
        })
    }
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

  }


  getProfileFeed() {
    this.token = JSON.parse(localStorage.getItem('access'));
    const httpOptions = {
      headers: new HttpHeaders(
      {
         'Authorization': 'Bearer ' + this.token,
         'Content-Type': 'application/json'
      })
  }
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


  getPostFeed() {
    this.token = JSON.parse(localStorage.getItem('access'));
    const httpOptions = {
      headers: new HttpHeaders(
      {
         'Authorization': 'Bearer ' + this.token,
         'Content-Type': 'application/json'
      })
  }
    return this.http
      .get<Post[]>(
        'http://localhost:8000/api/posts/',
        httpOptions
      )
      .pipe(
        map(posts => {
          return posts.map(post => {
            return {
              ...post
            };
          });
        }),
        tap(posts => {
          this.functionService.setPosts(posts);
        })
      );
  }
}
