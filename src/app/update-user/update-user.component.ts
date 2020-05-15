import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ApplicationModel } from '../Models/ApplicationModel.model';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  updateForm: FormGroup;
  submittedButton: any;

  appId: any;

  userData: ApplicationModel;
  userUpdateData: ApplicationModel;

  constructor(
    private formBuilder: FormBuilder,
    private myRoutes: Router,
    private userService: UserService,
    myActiveRoute: ActivatedRoute
  ) {
    this.userData = new ApplicationModel();
    if (myActiveRoute.snapshot.paramMap.get('userData')) {
      this.userUpdateData = JSON.parse(
        myActiveRoute.snapshot.paramMap.get('userData')
      );
      console.log(this.userUpdateData);
      
    }

  

    this.updateForm = new FormGroup({
      appId: new FormControl(),
      appName: new FormControl(),
      appDesc: new FormControl(),
    });
  }
  get UpdateData() {
    return this.updateForm.controls;
  }

  Update() {
    this.submittedButton = true;
    if (this.updateForm.invalid) {
      console.log('Invalid Form');

      return;
    }
    if (this.updateForm.valid) {
      this.appId = this.updateForm.value.appId;

      this.userData.appName = this.updateForm.value.appName;
      this.userData.appDesp = this.updateForm.value.appDesp;

      this.userService.update(this.appId, this.userData);
      this.myRoutes.navigate(['/userMessage']);

      console.log(this.userData);
    }
  }
  ResetButton() {
    this.submittedButton = false;
    this.updateForm.reset();
  }
  Back() {
    this.myRoutes.navigate(['/userData']);
  }

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      appId: ['', [Validators.pattern('[0-9]*')]],
      appName: ['', [Validators.pattern('^[a-zA-Z]*$')]],

      appDesp: [],
    });
  }
}
