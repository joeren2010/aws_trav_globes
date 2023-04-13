import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientComponent } from './client.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { ListofClientsComponent } from './listof-clients/listof-clients.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { AuthService } from 'src/app/servces/auth.service';
import { ClientService } from 'src/app/servces/client.service';


@NgModule({
  declarations: [
    ClientComponent,
    CreateClientComponent,
    ListofClientsComponent,
    ClientDetailComponent, 
  ],
  imports: [
    CommonModule,
    RouterModule, 
    ReactiveFormsModule
  ],
  providers :[
    AuthService, 
    ClientService
  ]
})
export class ClientModule { }
