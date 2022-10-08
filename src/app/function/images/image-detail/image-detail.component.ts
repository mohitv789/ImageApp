import { Component, OnInit,Inject, Output, Input, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Album } from '../../albums/album.model';
import { FunctionService } from '../../function.service';
import { Image } from '../image.model';
import { Post } from './image-post/post.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  image: Image;
  id: number;
  albums: Album[];
  images: Image[];
  album: Album;
  posts: Post[];
  subscription: Subscription;

  @Input() albumSelected: Album;

  constructor(private functionService: FunctionService,
              private route: ActivatedRoute,
              private router: Router,
              private ds : DataStorageService,) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.image = this.functionService.getImage(this.id);
        }
      );
    this.album =  this.albumSelected;
    this.albums = this.functionService.getAlbums();
    this.posts = this.functionService.getPosts();
    this.image = this.functionService.getImage(this.id);
  }


  onSaveImage() {
    this.ds.storeImage(this.id);
  }

  editMetaData() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  // onFetchPostData() {
  //   this.ds.getPostFeed().subscribe();
  //   console.log(this.posts);
  // }


}
