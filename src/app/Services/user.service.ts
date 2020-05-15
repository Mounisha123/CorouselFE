import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationModel } from '../Models/ApplicationModel.model';

@Injectable()
export class UserService {
  appPage: any;
  constructor(private myHttp: HttpClient) {
    this.appPage = [];
  }
  getUserDataFromApI() {
    return this.myHttp.get('https://localhost:44303/api/Values');
  }
  InsertUser(userData: ApplicationModel): boolean {
    this.myHttp
      .post('https://localhost:44303/api/Values', userData)
      .subscribe((res) => {
        console.log(res);
      });
    return true;
  }

  update(appId: any, appPage: ApplicationModel): Boolean {
    console.log('in service', appId);
    this.myHttp
      .put('https://localhost:44303/api/Values?appId=' + appId, appPage)
      .subscribe((res) => {
        console.log(res);
      });

    return true;
  }
}
