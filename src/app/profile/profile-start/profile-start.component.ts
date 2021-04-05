import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../profile.service";
import { Profile } from "../profile.model";
@Component({
  selector: 'app-profile-start',
  templateUrl: './profile-start.component.html',
  styleUrls: ['./profile-start.component.css']
})
export class ProfileStartComponent implements OnInit {
  profile: Profile;
  constructor(public profileService: ProfileService) { }

  ngOnInit(): void {
  }

  onFetchProfile() {
    this.profile = this.profileService.profile;
    console.log(this.profile);
  }

}
