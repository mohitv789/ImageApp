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

  get imageControls() {
    return (this.albumForm.get('images') as FormArray).controls;
  }

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

  onAddImage() {
    (<FormArray>this.albumForm.get('images')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        description: new FormControl(null, Validators.required),
        imagePath: new FormControl(null, Validators.required),
      })
    );
  }

  onDeleteImage(index: number) {
    (<FormArray>this.albumForm.get('images')).removeAt(index);
  }


  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let albumTitle = '';
    let albumOwner = '';
    let published_on = '';
    let images = new FormArray([]);

    if (this.editMode) {
      const album = this.functionService.getAlbum(this.id);
      albumTitle = album.title;
      albumOwner = album.owner;
      published_on = album.published_on;
      if (album['images']) {
        for (let image of album.images) {
          images.push(
            new FormGroup({
              name: new FormControl(image.name, Validators.required),
              description: new FormControl(image.description, Validators.required),
              imagePath: new FormControl(image.imagePath, Validators.required)
            })
          );
        }
    this.albumForm = new FormGroup({
      name: new FormControl(albumTitle, Validators.required),
      owner: new FormControl(albumOwner, Validators.required),
      published_on: new FormControl(published_on, Validators.required),
      images: images

    });
  }}}
}
