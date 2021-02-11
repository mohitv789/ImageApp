import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePostItemComponent } from './image-post-item.component';

describe('ImagePostItemComponent', () => {
  let component: ImagePostItemComponent;
  let fixture: ComponentFixture<ImagePostItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagePostItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagePostItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
