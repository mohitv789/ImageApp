import { Component, OnInit } from '@angular/core';
import { DataStorageService } from "../../shared/data-storage.service"

@Component({
  selector: 'app-profile-start',
  templateUrl: './profile-start.component.html',
  styleUrls: ['./profile-start.component.css']
})
export class ProfileStartComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
  }

  onFetchProfile() {
    this.dataStorageService.getYourProfile().subscribe();
  }

}
