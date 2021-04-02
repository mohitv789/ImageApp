import { Component, Input, OnInit } from '@angular/core';
import { FunctionService } from '../../../../function.service';
import { Post } from '../post.model'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-image-post-list',
  templateUrl: './image-post-list.component.html',
  styleUrls: ['./image-post-list.component.css']
})

export class ImagePostListComponent implements OnInit {
  @Input() posts: Post[];
  constructor() { }

  ngOnInit() {

  }

}
