import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { ListofAdminsComponent } from './listof-admins/listof-admins.component';
import { AdminDetailComponent } from './admin-detail/admin-detail.component';
import { AuthService } from 'src/app/servces/auth.service';
import { AdminService } from 'src/app/servces/admin.service';


@NgModule({
  declarations: [
    AdminComponent,
    CreateAdminComponent,
    ListofAdminsComponent,
    AdminDetailComponent,
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
export class AdminModule { }
