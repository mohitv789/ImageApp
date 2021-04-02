import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../post.model'
@Component({
  selector: 'app-image-post-item',
  templateUrl: './image-post-item.component.html',
  styleUrls: ['./image-post-item.component.css']
})
export class ImagePostItemComponent implements OnInit {
  @Input() post: Post;
  @Input() index: number;
  constructor() { }

  ngOnInit(): void {
  }

}
