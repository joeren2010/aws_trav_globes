import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { CreateAdminComponent } from './components/admin/create-admin/create-admin.component';
import { ListofAdminsComponent } from './components/admin/listof-admins/listof-admins.component';
import { AdminDetailComponent } from './components/admin/admin-detail/admin-detail.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginAdminComponent } from './components/auth/login-admin/login-admin.component';
import { LoginClientsComponent } from './components/auth/login-clients/login-clients.component';
import { LoginDriversComponent } from './components/auth/login-drivers/login-drivers.component';
import { NewPasswdComponent } from './components/auth/new-passwd/new-passwd.component';
import { NewRegisterComponent } from './components/auth/new-register/new-register.component';
import { CabComponent } from './components/cab/cab.component';
import { CabCatadmsComponent } from './components/cab/cab-catadms/cab-catadms.component';
import { CabCatclientComponent } from './components/cab/cab-catclient/cab-catclient.component';
import { CabCatdriverComponent } from './components/cab/cab-catdriver/cab-catdriver.component';
import { CabCategoryComponent } from './components/cab/cab-category/cab-category.component';
import { CabCatotherComponent } from './components/cab/cab-catother/cab-catother.component';
import { CartComponent } from './components/cart/cart.component';
import { BookAgainComponent } from './components/cart/book-again/book-again.component';
import { SavedItemsComponent } from './components/cart/saved-items/saved-items.component';
import { ClientComponent } from './components/client/client.component';
import { CreateClientComponent } from './components/client/create-client/create-client.component';
import { ListofClientsComponent } from './components/client/listof-clients/listof-clients.component';
import { ClientDetailComponent } from './components/client/client-detail/client-detail.component';
import { ContactComponent } from './components/contact/contact.component';
import { DriverComponent } from './components/driver/driver.component';
import { CreateDriverComponent } from './components/driver/create-driver/create-driver.component';
import { ListofDriversComponent } from './components/driver/listof-drivers/listof-drivers.component';
import { DriverDetailComponent } from './components/driver/driver-detail/driver-detail.component';
import { HelpcenterComponent } from './components/helpcenter/helpcenter.component';
import { HomeComponent } from './components/home/home.component';
import { OfferComponent } from './components/offer/offer.component';
import { OfferclientComponent } from './components/offer/offerclient/offerclient.component';
import { OfferdriverComponent } from './components/offer/offerdriver/offerdriver.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PayclientComponent } from './components/payment/payclient/payclient.component';
import { PaydriverComponent } from './components/payment/paydriver/paydriver.component';
import { ResvComponent } from './components/resv/resv.component';
import { ResvclientComponent } from './components/resv/resvclient/resvclient.component';
import { ResvdriverComponent } from './components/resv/resvdriver/resvdriver.component';
import { ResvcabComponent } from './components/resv/resvcab/resvcab.component';
import { ResvflightComponent } from './components/resv/resvflight/resvflight.component';
import { ResvhotelComponent } from './components/resv/resvhotel/resvhotel.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { MyListComponent } from './components/wishlist/my-list/my-list.component';


const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:"full" },
  { path:'about' , component:AboutComponent },
  { path:'admin' , children: [
    { path :'', component: AdminComponent },
    { path :'createadmin', component: CreateAdminComponent },
    { path :'listofadmin', component: ListofAdminsComponent },
    { path :'admindetail', component: AdminDetailComponent },
  ]},
  { path:'auth' , children: [
    { path :'', component: AuthComponent },
    { path :'loginadmin', component: LoginAdminComponent },
    { path :'loginclients', component: LoginClientsComponent },
    { path :'logindrivers', component: LoginDriversComponent },
    { path :'newpasswd', component: NewPasswdComponent },
    { path :'newregister', component: NewRegisterComponent },
  ]},
  { path:'cab' , children: [
    { path :'', component: CabComponent },   
    { path :'cabcategory', component: CabCategoryComponent },
    { path :'cabcatadmin', component: CabCatadmsComponent },
    { path :'cabcatclient', component: CabCatclientComponent },
    { path :'cabcatdriver', component: CabCatdriverComponent },
    { path :'cabcatother', component: CabCatotherComponent },
  ]},
  { path:'cart' , children: [
    { path :'', component: CartComponent },
    { path :'bookagain', component: BookAgainComponent },
    { path :'saveditems', component: SavedItemsComponent },
  ]},
  { path:'client' , children: [
    { path :'', component: ClientComponent },
    { path :'createclient', component: CreateClientComponent },
    { path :'listofclients', component: ListofClientsComponent },
    { path :'clientdetail', component: ClientDetailComponent },
  ]},
  { path:'contact' , component:ContactComponent },
  { path:'driver' , children: [
    { path :'', component: DriverComponent },
    { path :'createdriver', component: CreateDriverComponent },
    { path :'listofdrivers', component: ListofDriversComponent },
    { path :'driverdetail', component: DriverDetailComponent },
  ]},
  { path:'helpcenter' , component:HelpcenterComponent },
  { path:'home' , component:HomeComponent },
  { path:'offer' , children: [
    { path :'', component: OfferComponent },
    { path :'offerclient', component: OfferclientComponent },    
    { path :'offerdriver', component: OfferdriverComponent },    
  ]},  
  { path:'payment' , children: [
    { path :'', component: PaymentComponent },
    { path :'payclient', component: PayclientComponent },    
    { path :'paydriver', component: PaydriverComponent },    
  ]},
  { path:'resv' , children: [
    { path :'', component: ResvComponent },
    { path :'resvclient', component: ResvclientComponent },    
    { path :'resvdriver', component: ResvdriverComponent }, 
    { path :'resvcab', component: ResvcabComponent },   
    { path :'resvflight', component: ResvflightComponent },    
    { path :'resvhotel', component: ResvhotelComponent },
  ]},
  { path:'wishlist' , children: [
    { path :'', component: WishlistComponent },
    { path :'mylist', component: MyListComponent },    
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
