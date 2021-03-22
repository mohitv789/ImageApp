import { Component, OnInit } from '@angular/core';
import { FunctionService } from '../function.service';
import { Album } from './album.model';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  constructor(private ds: DataStorageService) { }

  ngOnInit() {
    if (this.ds.firstLoad) {
      this.ds.fetchAlbums().subscribe();
      this.ds.firstLoad = false;
    }
  }

}
