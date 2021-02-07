import { Component, OnInit } from '@angular/core';
import { FunctionService } from '../function.service';
import { Image } from './image.model';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  constructor() { }

  ngOnInit(){
  }

}
