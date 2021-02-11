import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileStartComponent } from './profile-start.component';

describe('ProfileStartComponent', () => {
  let component: ProfileStartComponent;
  let fixture: ComponentFixture<ProfileStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
