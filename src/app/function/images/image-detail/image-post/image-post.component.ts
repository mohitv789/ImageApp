import { Component, OnInit, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { FunctionService } from 'src/app/function/function.service';
import { DataStorageService } from '../../../../shared/data-storage.service';
import { Post } from './post.model';

@Component({
  selector: 'app-image-post',
  templateUrl: './image-post.component.html',
  styleUrls: ['./image-post.component.css']
})
export class ImagePostComponent implements OnInit {
  @Output() posts: Post[];

  subscription: Subscription;
  constructor(public functionService: FunctionService) { }

  ngOnInit() {
    this.subscription = this.functionService.postsChanged
    .subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.posts = this.functionService.getPosts();

  }

}
