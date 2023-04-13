import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminModule } from './components/admin/admin.module';
import { AuthModule } from './components/auth/auth.module';
import { CabModule } from './components/cab/cab.module';
import { CartModule } from './components/cart/cart.module';
import { ClientModule } from './components/client/client.module';
import { DriverModule } from './components/driver/driver.module';
import { PaymentModule } from './components/payment/payment.module';
import { OfferModule } from './components/offer/offer.module';
import { ResvModule } from './components/resv/resv.module';
import { ToastrModule } from 'ngx-toastr';
import { WishlistModule } from './components/wishlist/wishlist.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HelpcenterComponent } from './components/helpcenter/helpcenter.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavsideComponent } from './components/navside/navside.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ResvcabService } from './servces/resvcab.service';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    HelpcenterComponent,    
    HomeComponent,
    NavbarComponent,
    NavsideComponent,
    NotfoundComponent, 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule,
    AdminModule,
    CabModule,
    CartModule,
    ClientModule,
    DriverModule,
    PaymentModule,
    OfferModule,
    ResvModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      countDuplicates: true
    }),
    WishlistModule,
  ],
  providers: [ResvcabService],
  bootstrap: [AppComponent]
})
export class AppModule { }
