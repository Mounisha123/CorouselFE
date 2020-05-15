import { Component, OnInit } from '@angular/core';
import { ApplicationModel } from '../Models/ApplicationModel.model';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-app-page',
  templateUrl: './app-page.component.html',
  styleUrls: ['./app-page.component.css'],
})
export class AppPageComponent implements OnInit {
  myForm: FormGroup;
  userData: ApplicationModel;
  submittedButton = false;
  showData: any;
  appPage: any;

  page: number = 1;

  appId: any;

  constructor(
    private formBuilder: FormBuilder,
    private myRoutes: Router,
    private userService: UserService
  ) {
    this.userData = new ApplicationModel();
    // this.UserButton();
    this.myForm = new FormGroup({
      appName: new FormControl(),
      appDesp: new FormControl(),
    });
  }

  get allUserData() {
    return this.myForm.controls;
  }

  UserButton() {
    this.submittedButton = true;
    if (this.myForm.invalid) {
      console.log('Invalid Form');

      return;
    }
    if (this.myForm.valid) {
      this.userData.appName = this.myForm.value.appName;

      this.userData.appDesp = this.myForm.value.appDesp;

      this.showData = 1; //shows the grid data

      this.userService.InsertUser(this.userData);
      this.userService.getUserDataFromApI().subscribe((data) => {
        this.appPage = data;
        console.log(this.appPage);
      });
    }
  }

  Update(getData: ApplicationModel) {
    this.myRoutes.navigate(
      ['/updatePage', { userData: JSON.stringify(getData) }],
      { skipLocationChange: true }
    );
  }
  Delete(getData: ApplicationModel) {
    this.myRoutes.navigate(
      ['/userDelete', { userData: JSON.stringify(getData) }],
      { skipLocationChange: true }
    );
  }

  ResetButton() {
    this.submittedButton = false;
    this.myForm.reset();
  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      appName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],

      appDesp: ['', [Validators.required]],
    });
    this.userService.getUserDataFromApI().subscribe((data) => {
      this.appPage = data;
      console.log(this.appPage);
    });
  }
}
