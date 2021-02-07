import { Component, OnInit } from '@angular/core';
import { Album } from './albums/album.model';
import { FunctionService } from './function.service';
import { Image } from './images/image.model';

@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.css']
})
export class FunctionComponent implements OnInit {
  constructor() { }

  ngOnInit(){}

}
