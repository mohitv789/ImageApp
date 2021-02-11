import { Component, OnInit,Inject, Output, Input } from '@angular/core';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Album } from '../../albums/album.model';
import { FunctionService } from '../../function.service';
import { Image } from '../image.model';
import { AlbumDialogue } from './album-dialogue.component';


@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  image: Image;
  id: number;
  albums: Album[];
  slides:any = [];
  images: Image[];
  album: Album;
  @Input() albumSelected: Album;
  @Output() imageIndex;

  constructor(private functionService: FunctionService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.image = this.functionService.getImage(this.id);
          this.imageIndex = this.image.id;
        }
      );
    this.album =  this.albumSelected; 
    this.albums = this.functionService.getAlbums();

    for (let album of this.albums){
      this.slides.push([album.title,album.owner,album.published_on])
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(AlbumDialogue,{
      width: '60%',
      data: this.albums
    });
    
    dialogRef.afterClosed().subscribe(result => {

      if (this.album.title === result.title) {
        this.functionService.addToAlbum(this.image,this.album);
        console.log(this.image.name,this.album.title);
      } else {
        this.router.navigate([''], {relativeTo: this.route});
      }
    });


  }

  // onEditImage() {
  //   this.router.navigate(['edit'], {relativeTo: this.route});
  // }

  // onDeleteImage() {
  //   this.functionService.deleteImage(this.id);
  //   this.router.navigate(['/app/images']);
  // }


}






