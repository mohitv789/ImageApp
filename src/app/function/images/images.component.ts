import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { DataStorageService } from '../../shared/data-storage.service';


@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  constructor(private authService: AuthService, private ds: DataStorageService) { }

  ngOnInit(){
    if (!!this.ds.firstLoad) {
      this.ds.firstLoad = false;
      this.authService.get_token()
    }
  }

}
