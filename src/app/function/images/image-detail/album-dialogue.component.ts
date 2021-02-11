
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Album } from '../../albums/album.model';
import { FunctionService } from '../../function.service';


@Component({
    selector: 'album-dialogue',
    templateUrl: './album-dialogue.component.html',
  })
export class AlbumDialogue implements OnInit{
  albums:Album[] = [];
  albumitemSelected: Album;
  @Input() albumSelected: Album;

  constructor(
    public dialogRef: MatDialogRef<AlbumDialogue>,
    private functionService:FunctionService, 
    @Inject(MAT_DIALOG_DATA) public data: Album) {
    }

  ngOnInit() {
    this.albums = this.functionService.getAlbums();
    this.albumitemSelected = this.albumSelected;
  }

  cancel() {
    this.dialogRef.close({ data: false })
  }

  confirm() {
    this.dialogRef.close({ data: this.albumitemSelected})
  }

}
  