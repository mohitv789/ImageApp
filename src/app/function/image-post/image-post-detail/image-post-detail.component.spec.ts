import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePostDetailComponent } from './image-post-detail.component';

describe('ImagePostDetailComponent', () => {
  let component: ImagePostDetailComponent;
  let fixture: ComponentFixture<ImagePostDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagePostDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagePostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
