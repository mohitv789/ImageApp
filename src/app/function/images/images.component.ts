import { Component, OnInit } from '@angular/core';
import { FunctionService } from '../function.service';
import { Image } from './image.model';
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
      this.ds.firstLoad = false;
    }
  }

}
