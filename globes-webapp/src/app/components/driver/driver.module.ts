import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DriverComponent } from './driver.component';
import { CreateDriverComponent } from './create-driver/create-driver.component';
import { ListofDriversComponent } from './listof-drivers/listof-drivers.component';
import { DriverDetailComponent } from './driver-detail/driver-detail.component';
import { AuthService } from 'src/app/servces/auth.service';
import { DriverService } from 'src/app/servces/driver.service';


@NgModule({
  declarations: [
    DriverComponent,
    CreateDriverComponent,
    ListofDriversComponent,
    DriverDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule, 
    ReactiveFormsModule
  ],
  providers :[
    AuthService, 
    DriverService
  ]
})
export class DriverModule { }
