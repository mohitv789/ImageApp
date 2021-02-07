import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FunctionService } from '../../function.service';
import { Album } from '../album.model';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albums: Album[];
  subscription: Subscription;

  constructor(private functionService: FunctionService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.functionService.albumsChanged
      .subscribe(
        (albums: Album[]) => {
          this.albums = albums;
        }
      );
      this.albums = this.functionService.getAlbums();
  }

  onNewAlbum() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
