import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { ResvcabService } from './resvcab.service';
//import { Resv } from 'src/app/models/resv';
import { Client } from 'src/app/models/client';
import { Cart } from 'src/app/models/cart';
import { Driver } from 'src/app/models/driver';
import { Cab } from 'src/app/models/cab';
import { IpaddyService } from './ipaddy.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(
    private httpClient: HttpClient, public ipaddyService: IpaddyService,
    private toast: ToastrService, public resvcabService: ResvcabService
  ) { }

  ec2Ip: string = this.ipaddyService.getIpAddy();           //ip-addy from ec2
  private urlPostCart: string = 'http://' + this.ec2Ip + ':5151/cart/storeCart';
  private urlGetAllCart: string = 'http://' + this.ec2Ip + ':5151/cart/findAllCart';
  private urlGetOneCart: string = 'http://' + this.ec2Ip + ':5151/cart/findCartById';
  private urlDelAllCart: string = 'http://' + this.ec2Ip + ':5151/cart/deleteAll';
  private urlDelOneCart: string = 'http://' + this.ec2Ip + ':5151/cart/deleteCartById/';
  private urlPutCart: string = 'http://' + this.ec2Ip + ':3000/meetings/';
  private urlPatchCart: string = 'http://' + this.ec2Ip + ':3000/meetings/';
  private urlCalCart: string = 'http://' + this.ec2Ip + ':3000/calen.php/';
  private urlMtgCart: string = 'http://' + this.ec2Ip + ':3000/calen.php/';
  private urlApiCart: string = 'https://fakestoreapi.com/projects';
  private urlLocCart: string = 'http://' + this.ec2Ip + ':3000/cart';
  private urlComCart: string = './../assets/data/cart.json';

  public carts: any[] = [];
  //public wishlistCabs:any[] =[];
  public cartsRetreived: boolean = false;
  //public savedItems: any[] = []; 

  public cartsSub: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  getAllCart() {
    return this.httpClient.get<any[]>(this.urlGetAllCart);
    //return this.httpClient.get<any[]>('../../assets/data/cab.json');
  }

  getOneCart(cartId: any): Observable<string> {
    return this.httpClient.get(this.urlGetOneCart + cartId, { responseType: 'text' });
    //return this.httpClient.get<any[]>('../../assets/data/cart.json');
  }

  //for string media-type - DO NOT DELETE
  storeCart(cart: any): Observable<string> {
    console.log(cart);
    return this.httpClient.post(this.urlPostCart, cart, { responseType: 'text' });
  }

  // //for json server and json.file - DO NOT DELETE
  // storeCart(cart: any): Observable<any>{
  //   console.log(cart);
  //   return this.httpClient.post(this.urlPostCart, cart);
  //   //return this.httpClient.post<any[]>(this.urlLocCart, cart);
  //   //this.httpClient.post<any[]>('../../assets/data/cart.json', cart)    
  // } 

  deleteCart(cartId: any): Observable<string> {
    return this.httpClient.delete(this.urlDelOneCart + cartId, { responseType: 'text' });
  }

  getAllCarts() {
    if (!this.cartsRetreived) {
      this.httpClient.get<any[]>(this.urlGetAllCart)
        //this.httpClient.get<any[]>('../../assets/data/cart.json')
        .subscribe((res) => {
          //console.log(res);
          this.cartsSub.next(Object.assign([], res))
          this.cartsRetreived = true
        }
        );
    }
  }


  bookResv() {
    //   let resv: Resv = {};
    //   this.resvcabService.cabs.forEach(v => {
    //     console.log(v)
    //   })
    //   let obj = sessionStorage.getItem("client")
    //   if (obj != null) {
    //     let client = JSON.parse(obj);
    //     resv = client;
    //   }
    //   resv.resvDate = "2023-02-18 18:51:06.728000";       //cart date - created in eclipse
    //   resv.clientName = "John Doe";                        //need to add this to client model
    //   resv.clientId = 1;                                  //need to add this to client model
    //   resv.clientEmail = "jdoe@gmail.com";                  //need to add this to client model
    //   resv.clientPhone = "719-555-1234";                  //need to add this to client model
    //   resv.cartId = 1;                                     //need to add this to cart model
    //   resv.pickupLoc = "pueblo";                          //need to add this to cart model
    //   resv.dropoffLoc = "phoenix";                          //need to add this to cart model
    //   resv.tripDistance = 250;                                     //need to add this to cart model
    //   resv.unitPrice = 0.5;                                     //need to add this to cart model
    //   resv.itemsSubTotal = 150.0;                                     //need to add this to cart model
    //   resv.driverName = "Jane Smith";                        //need to add this to driver model
    //   resv.driverId = 1;                                  //need to add this to driver model
    //   resv.cabId = 4;                                  //need to add this to cab model
    //   resv.resvStatus = "Approved";
    //   // resv.totalItems = totalItems;
    //   // resv.totalAmount = totalPrice;
    //   // resv.shipmentCharges = 100;
    //   // resv.paymentStatusTitle = "Pending";
    //   // resv.paymentMethodTitle = "Cash on Delivery (COD)"
    //   resv.resvitems = this.resvcabService.cabs;
    //   console.log(resv);
    //   console.log(this.resvcabService.cabs);
    //   this.httpClient.post("http://localhost:4141/resv/storeResv", resv, { responseType: 'text' })
    //     .subscribe({
    //       next: (result: any) => console.log(result),
    //       error: (error: any) => console.log(error),
    //       complete: () => console.log("done")
    //     });

  }

}


class Resv {
  constructor(
    public resvId?: number,
    public resvDate?: string,
    public clientName?: string,
    public clientId?: number,
    public clientEmail?: string,
    public clientPhone?: string,
    public cartId?: number,
    public pickupLoc?: string,
    public pickupDate?: Date,
    public pickupTime?: string,
    public dropoffLoc?: string,
    public dropoffDate?: Date,
    public dropoffTime?: string,
    public tripDistance?: number,
    public unitPrice?: number,
    public itemsSubTotal?: number,
    public driverName?: string,
    public driverId?: number,
    public cabId?: number,
    public resvStatus?: string,
    public cabTitle?: string,
    public price?: number,
    public quantity?: number,
    public paymentMethod?: number,
    public paymentMethodTitle?: string,
    public paymentStatus?: number,
    public paymentStatusTitle?: string,
    public shipmentCharges?: number,
    public totalItems?: number,
    public totalAmount?: number,
    public resvitems?: Array<ResvItem>
  ) {

  }
}
class ResvItem {
  constructor(
    public resvItemId?: number,
    public cabCategory?: string,
    public cabCode?: string,
    public cabDescription?: string,
    public cabImg?: string,
    public cabTitle?: string,
    public quantity?: number,
    public totalPrice?: number
  ) {

  }
}





// placeResv(totalItems: number, totalPrice: number) {
//   let resv: Resv = {};
//   this.resvcabService.cabs.forEach(v => {
//     console.log(v)
//   })
//   let obj = sessionStorage.getItem("client")
//   if (obj != null) {
//     let client = JSON.parse(obj);
//     resv = client;
//   }
//   resv.totalItems = totalItems;
//   resv.totalAmount = totalPrice;
//   resv.shipmentCharges = 100;
//   resv.paymentStatusTitle = "Pending";
//   resv.paymentMethodTitle = "Cash on Delivery (COD)"
//   resv.resvitems = this.resvcabService.cabs;
//   console.log(resv);
//   console.log(this.resvcabService.cabs);
//   // this.httpClient.post("http://localhost:9090/resv/placeResv", resv, { responseType: 'text' }).subscribe({
//   this.httpClient.post("http://localhost:4141/resv/storeResv", resv, { responseType: 'text' }).subscribe({
//     next: (result: any) => console.log(result),
//     error: (error: any) => console.log(error),
//     complete: () => console.log("done")
//   });

// }