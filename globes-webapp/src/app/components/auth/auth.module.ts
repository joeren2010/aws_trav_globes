import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginClientsComponent } from './login-clients/login-clients.component';
import { LoginDriversComponent } from './login-drivers/login-drivers.component';
import { NewPasswdComponent } from './new-passwd/new-passwd.component';
import { NewRegisterComponent } from './new-register/new-register.component';
import { AdminService } from 'src/app/servces/admin.service';
import { AuthService } from 'src/app/servces/auth.service';
import { ClientService } from 'src/app/servces/client.service';
import { DriverService } from 'src/app/servces/driver.service';







@NgModule({
  declarations: [
    AuthComponent,  
    LoginAdminComponent,
    LoginClientsComponent,
    LoginDriversComponent,
    NewPasswdComponent,
    NewRegisterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule, 
    ReactiveFormsModule
  ],
  providers :[
    AuthService, 
    AdminService,
    ClientService,
    DriverService
  ]
})
export class AuthModule { }
