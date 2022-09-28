import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FunctionService } from '../../function.service';


@Component({
  selector: 'app-album-edit',
  templateUrl: './album-edit.component.html',
  styleUrls: ['./album-edit.component.css']
})
export class AlbumEditComponent implements OnInit {

  id: number;
  editMode = false;
  albumForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private functionService: FunctionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.functionService.updateAlbum(this.id, this.albumForm.value);
    } else {
      this.functionService.addAlbum(this.albumForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let albumTitle = '';
    let published_on = '';

    if (this.editMode) {
      const album = this.functionService.getAlbum(this.id);
      console.log(album);

      albumTitle = album.title;
      published_on = album.published_on;

    this.albumForm = new FormGroup({
      title: new FormControl(albumTitle, Validators.required),
      published_on: new FormControl(published_on, Validators.required)
    })
    }
  }
}

