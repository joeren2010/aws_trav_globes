import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { PayclientComponent } from './payclient/payclient.component';
import { PaydriverComponent } from './paydriver/paydriver.component';


@NgModule({
  declarations: [
    PaymentComponent,
    PayclientComponent,
    PaydriverComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PaymentModule { }
