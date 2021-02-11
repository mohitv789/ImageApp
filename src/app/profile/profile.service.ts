import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from "../auth/auth.service";
import { Profile } from "./profile.model";
import { FunctionService } from "../function/function.service"


@Injectable()
export class ProfileService {
  payload: any;
  private profile: Profile;
  constructor(private functionService: FunctionService, private authService: AuthService) {}

  ngOnInit() {
    this.payload = this.parseJwt();
    console.log(this.payload);
  }

  parseJwt () {
    const token: string = JSON.parse(localStorage.getItem('token'));
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  };

  setProfile(profile) {
    this.profile = profile;
  }

}
