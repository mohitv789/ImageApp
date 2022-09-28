import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
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
  ngOnInit(){
  }

}
