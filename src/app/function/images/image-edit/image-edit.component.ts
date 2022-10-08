import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FunctionService } from '../../function.service';
import { User } from 'src/app/auth/user.model';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-image-edit',
  templateUrl: './image-edit.component.html',
  styleUrls: ['./image-edit.component.css']
})
export class ImageEditComponent implements OnInit {

  id: number;
  editMode = false;
  imageForm: FormGroup;

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
      this.functionService.updateImage(this.id, this.imageForm.value);
    } else {
      this.functionService.addImage(this.imageForm.value);
    }
    this.onCancel();
  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let imageName = '';
    let imagePath = '';
    let imageDescription = '';
    let imageOwner = null;
    let decoded = jwt_decode(localStorage.getItem("access"));

    if (this.editMode) {
      const image = this.functionService.getImage(this.id);
        imageName = image.name;
        imagePath = image.imagePath;
        imageDescription = image.description;
        imageOwner = image.owner;
      }
    this.imageForm = new FormGroup({
      name: new FormControl(imageName, Validators.required),
      imagePath: new FormControl(imagePath, Validators.required),
      description: new FormControl(imageDescription, Validators.required),
      owner: new FormControl(imageOwner,Validators.required)
    });
  }

}
