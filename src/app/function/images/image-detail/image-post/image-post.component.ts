import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-image-post',
  templateUrl: './image-post.component.html',
  styleUrls: ['./image-post.component.css']
})
export class ImagePostComponent implements OnInit {

  subscription: Subscription;
  constructor() { }

  ngOnInit() { }

}
