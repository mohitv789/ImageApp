import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../../image.model';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.css']
})
export class ImageItemComponent implements OnInit {
  @Input() image: Image;
  @Input() index: number;
  constructor() { }

  ngOnInit(): void {
  }

}
