import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { CabService } from 'src/app/servces/cab.service';
import { CartService } from 'src/app/servces/cart.service';
import { ResvcabService } from 'src/app/servces/resvcab.service';
import { Cab } from '../cab/cab.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cartObservable: Observable<any[]> = new Observable();
  public totalItems: number = 0;
  public totalPrice: number = 0;

  constructor(
    public cabService: CabService,
    public cartService: CartService,
    private toast: ToastrService,
    public resvcabService: ResvcabService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.loaddata();
  }

  loaddata() {
    this.calculate();
    this.cartObservable = this.cartService.getAllCart();
  }

  addCabToWishlist(cab: any, removeBool: boolean, cabIdx: number) {
    this.resvcabService.addCabToWishlist(cab, removeBool, cabIdx);
    this.calculate();
  }

  saveForLater(cab: any, removeBool: boolean, cabIdx: number) {
    this.resvcabService.saveForLater(cab, removeBool, cabIdx);
    this.calculate();
  }

  removeCabFromCart(cabIdx: number) {
    let elements = this.resvcabService.cabs.splice(cabIdx, 1);
    this.toast.info(elements[0]['title'], "Cab Removed From Cart");
    this.calculate();
  }

  calculate() {
    this.totalItems = this.resvcabService.cabs.reduce((prev, next) => prev + next['quantity'], 0)
    this.totalPrice = this.resvcabService.cabs.reduce((prev, next) => prev + ((next['price'] * next['quantity']) + (next['unitPrice'] * (next['tripDistance'] * next['quantity']))), 0);
    // this.totalPrice = this.resvcabService.cabs.reduce((prev, next) => prev + (next['price'] * next['quantity']), 0);
  }

  // save cart into database
  saveCart() {
    let cartData: any = sessionStorage.getItem('cartData');
    if (cartData) {
      let cartRef: Cart[] = JSON.parse((cartData) as any) || [];
      console.log(cartRef);
      //let client = localStorage.getItem('client');
      //let clientId = client && JSON.parse(client).id;
      cartRef.forEach((cart: any, index: number) => {
        let cartData: any = {
          ...cart,
          cartId: cart.id,
          //clientId
        }
        delete cartData.id;
        setTimeout(() => {
          this.cartService.storeCart(cartRef).subscribe({
            next: (result: any) => {
              if (result == "Cart Details stored successfully") {
                alert("cart details stored successfully")
                console.log(result);
              } else {
                alert("cart details didn't store")
              }
            },
            error: (error: any) => console.log(error),
            complete: () => {
              console.log("completed");
              //this.loaddata();
            }
          })
        }, 500);
        if (cartRef.length === index + 1) {
          sessionStorage.removeItem('cartData')
        }
      })
    }
    try {
      setTimeout(() => {
        this.router.navigate(["payment"]);
      }, 1000);
    } catch (err: any) {
      console.log({ message: err.message });
    }
    this.loaddata();
  }

  // book resv into database
  bookResv() {
    return this.cartService.bookResv()
  }

}

export interface Cart {
  pickupLoc?: string;
  pickupDate?: Date;
  pickupTime?: string;
  dropoffLoc?: string;
  dropoffDate?: Date;
  dropoffTime?: string;
  unitPrice?: number;
  tripDistance?: number;
  travelCharges?: number;
  itemsSubTotal?: number;
}
