import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ResvComponent } from './resv.component';
import { ResvclientComponent } from './resvclient/resvclient.component';
import { ResvdriverComponent } from './resvdriver/resvdriver.component';
import { ResvcabComponent } from './resvcab/resvcab.component';
import { ResvflightComponent } from './resvflight/resvflight.component';
import { ResvhotelComponent } from './resvhotel/resvhotel.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { AuthService } from 'src/app/servces/auth.service';
import { AdminService } from 'src/app/servces/admin.service';


@NgModule({
  declarations: [
    ResvComponent,
    ResvclientComponent, 
    ResvdriverComponent,   
    ResvcabComponent,    
    ResvflightComponent,    
    ResvhotelComponent,
  ],
  imports: [
    CommonModule,    
    RouterModule, 
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,   
  ],
  providers :[
    AuthService, 
    AdminService
  ]
})
export class ResvModule { }
