import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Album } from '../../albums/album.model';
import { FunctionService } from '../../function.service';
import { DataStorageService } from '../../../shared/data-storage.service';
import { Image } from '../image.model';
import { Profile } from "../../../profile/profile.model"

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  images: Image[];
  albums: Album[];
  subscription: Subscription;

  constructor(private functionService: FunctionService,
              private router: Router,
              private route: ActivatedRoute,
              private dataStorageService: DataStorageService) {
  }

  ngOnInit() {
    this.subscription = this.functionService.imagesChanged
      .subscribe(
        (images: Image[]) => {
          this.images = images;
        }
      );
    this.images = this.functionService.getImages();
    this.albums = this.functionService.getAlbums();
  }

  onNewImage() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
