import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePostListComponent } from './image-post-list.component';

describe('ImagePostListComponent', () => {
  let component: ImagePostListComponent;
  let fixture: ComponentFixture<ImagePostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagePostListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagePostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
