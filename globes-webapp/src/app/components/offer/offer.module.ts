import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferComponent } from './offer.component';
import { OfferclientComponent } from './offerclient/offerclient.component';
import { OfferdriverComponent } from './offerdriver/offerdriver.component';


@NgModule({
  declarations: [
    OfferComponent,
    OfferclientComponent,
    OfferdriverComponent,    
  ],
  imports: [
    CommonModule
  ]
})
export class OfferModule { }
