import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Album } from '../../albums/album.model';
import { FunctionService } from '../../function.service';
import { Image } from '../image.model';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  image: Image;
  id: number;
  albums: Album[];

  constructor(private functionService: FunctionService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.image = this.functionService.getImage(this.id);
        }
      );
    this.albums = this.functionService.getAlbums();
  }

  onAddtoAlbum(album: Album) {
    this.functionService.addToAlbum(this.id,album);
  }


  // onEditImage() {
  //   this.router.navigate(['edit'], {relativeTo: this.route});
  // }

  // onDeleteImage() {
  //   this.functionService.deleteImage(this.id);
  //   this.router.navigate(['/app/images']);
  // }


}
