import { Component, OnInit } from '@angular/core';
import { FunctionService } from '../../../../function.service';
import { Post } from '../post.model'
import { Subscription } from 'rxjs';
import { Image } from '../../../image.model';
import { ActivatedRoute, Router,Params } from '@angular/router';

@Component({
  selector: 'app-image-post-list',
  templateUrl: './image-post-list.component.html',
  styleUrls: ['./image-post-list.component.css']
})

export class ImagePostListComponent implements OnInit {
  image: Image;
  posts: Post[];
  id: number;
  subscription: Subscription;

  constructor(private functionService: FunctionService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.image = this.functionService.getImage(this.id);
        }
      );
      this.posts = this.functionService.getPosts();
  }

  onNewImage() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }


}
