import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';


@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  constructor(private ds: DataStorageService) { }

  ngOnInit(){
    if (this.ds.firstLoad) {
      this.ds.fetchImages().subscribe();
      this.ds.fetchAlbums().subscribe();
      this.ds.firstLoad = false;
    }
  }

}
