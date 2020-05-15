import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SoftDeleteService {
  appPage: any;
  constructor(private myHttp: HttpClient) {
    this.appPage = [];
  }

  SoftDelete(appId: any, isDeleted: any): Boolean {
    console.log('in service', appId);
    this.myHttp
      .get('https://localhost:44303/api/SoftDelete/' + appId)
      .subscribe((res) => {
        console.log(res);
      });

    return true;
  }
}
