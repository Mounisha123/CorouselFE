import { Component, OnInit } from '@angular/core';
import { ApplicationModel } from '../Models/ApplicationModel.model';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../Services/user.service';
import { SoftDeleteService } from '../Services/soft-delete.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
@Component({
  selector: 'app-soft-delete',
  templateUrl: './soft-delete.component.html',
  styleUrls: ['./soft-delete.component.css'],
})
export class SoftDeleteComponent implements OnInit {
  deleteForm: FormGroup;
  appId: any;
  isDeleted: any;
  submittedButton: any;
  deleteOrNot: any; //Delete Message

  userUpdateData: ApplicationModel; // used for activated Route
  appPage: any; //used for Get
  userData: ApplicationModel;

  constructor(
    private formBuilder: FormBuilder,
    private myRoutes: Router,
    private userService: UserService,
    private softdeleteService: SoftDeleteService,
    myactiveRoute: ActivatedRoute
  ) {
    this.userData = new ApplicationModel();
    if (myactiveRoute.snapshot.paramMap.get('userData')) {
      this.userUpdateData = JSON.parse(
        myactiveRoute.snapshot.paramMap.get('userData')
      );
      console.log(this.userUpdateData);
   
    }


    this.deleteForm = new FormGroup({
      appId: new FormControl(),
    });
  }
  get DeleteData() {
    return this.deleteForm.controls;
  }
  SoftDelete() {
    //Hide the text box
    this.submittedButton = true;
    if (this.deleteForm.invalid) {
      console.log('Invalid Form');

      return;
    }

    if (this.deleteForm.valid) {
      this.appId = this.deleteForm.value.appId;
      this.softdeleteService.SoftDelete(this.appId, this.isDeleted);
      this.deleteOrNot = 'Deleted successfully';
      console.log(this.appId);
    }
  }
  ResetButton() {
    this.submittedButton = false;
    this.deleteForm.reset();
  }
  Back() {
    this.myRoutes.navigate(['/userData']);
  }
  ngOnInit(): void {
    this.deleteForm = this.formBuilder.group({
      appId: ['', [Validators.pattern('[0-9]*'), Validators.required]],
    });
  }
}
