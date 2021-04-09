import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { FunctionService } from '../../function.service';

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
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']);
    if (this.editMode) {
      this.functionService.updateImage(this.id, this.imageForm.value);
    } else {
      this.functionService.addImage(this.imageForm.value);
    }
    this.onCancel();
  }

  // onAddIngredient() {
  //   (<FormArray>this.imageForm.get('ingredients')).push(
  //     new FormGroup({
  //       name: new FormControl(null, Validators.required),
  //       amount: new FormControl(null, [
  //         Validators.required,
  //         Validators.pattern(/^[1-9]+[0-9]*$/)
  //       ])
  //     })
  //   );
  // }

  // onDeleteIngredient(index: number) {
  //   (<FormArray>this.imageForm.get('ingredients')).removeAt(index);
  // }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let imageName = '';
    let imagePath = '';
    let imageDescription = '';

    if (this.editMode) {
      const image = this.functionService.getImage(this.id);
      imageName = image.name;
      imagePath = image.imagePath;
      imageDescription = image.description;

      }
    this.imageForm = new FormGroup({
      name: new FormControl(imageName, Validators.required),
      imagePath: new FormControl(imagePath, Validators.required),
      description: new FormControl(imageDescription, Validators.required),
    });
  }

}
