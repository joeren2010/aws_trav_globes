import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CabComponent } from './cab.component';
import { CabCatadmsComponent } from './cab-catadms/cab-catadms.component';
import { CabCatclientComponent } from './cab-catclient/cab-catclient.component';
import { CabCatdriverComponent } from './cab-catdriver/cab-catdriver.component';
import { CabCategoryComponent } from './cab-category/cab-category.component';
import { CabCatotherComponent } from './cab-catother/cab-catother.component';
import { AuthService } from 'src/app/servces/auth.service';
import { AdminService } from 'src/app/servces/admin.service';


@NgModule({
  declarations: [
    CabComponent,
    CabCategoryComponent, 
    CabCatadmsComponent, 
    CabCatclientComponent, 
    CabCatdriverComponent, 
    CabCatotherComponent, 
  ],
  imports: [
    CommonModule,
    RouterModule, 
    ReactiveFormsModule
  ],
  providers :[
    AuthService, 
    AdminService
  ]
})
export class CabModule { }
