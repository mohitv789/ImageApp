import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePostEditComponent } from './image-post-edit.component';

describe('ImagePostEditComponent', () => {
  let component: ImagePostEditComponent;
  let fixture: ComponentFixture<ImagePostEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagePostEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagePostEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
