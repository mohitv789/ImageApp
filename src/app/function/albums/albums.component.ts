import { Component, OnInit } from '@angular/core';
import { FunctionService } from '../function.service';
import { Album } from './album.model';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
