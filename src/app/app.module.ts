import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPageComponent } from './app-page/app-page.component';
import { SoftDeleteComponent } from './soft-delete/soft-delete.component';
import { UpdateUserComponent } from './update-user/update-user.component';

import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';
import { SoftDeleteService } from './Services/soft-delete.service';
import { UserService } from './Services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateMessageComponent } from './update-message/update-message.component';
const myRoutes: Route[] = [
  { path: 'userData', component: AppPageComponent },
  { path: 'updatePage', component: UpdateUserComponent },
  { path: 'userDelete', component: SoftDeleteComponent },
  {path:'userMessage', component:UpdateMessageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AppPageComponent,
    SoftDeleteComponent,
    UpdateUserComponent,
    UpdateMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myRoutes),
  ],
  providers: [SoftDeleteService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
