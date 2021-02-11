
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Album } from 'src/app/function/albums/album.model';
import {FunctionService} from "../../../function.service";
@Component({
    selector: 'album-dialogue-item',
    templateUrl: 'album-dialogue-item.component.html',
  })
export class AlbumDialogueItem implements OnInit{
  @Output() selectedAlbum = new EventEmitter();
  @Input() album: Album;

  constructor() {}

  ngOnInit() {}

  onselectAlbum() {
    this.selectedAlbum.emit(this.album);
  }

}
  