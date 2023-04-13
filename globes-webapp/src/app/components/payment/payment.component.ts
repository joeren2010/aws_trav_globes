import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/servces/cart.service';
import { ResvcabService } from 'src/app/servces/resvcab.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  totalPrice: number = 0;
  cartObservable: Observable<any[]> = new Observable();

  cardImages: string[] = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png",
  ];

  constructor(
    public resvcabService: ResvcabService,
    public cartService: CartService, 
  ) { }

  ngOnInit(): void {
    this.loaddata();
  }

  loaddata(){
    this.calctotal();
    this.cartObservable = this.cartService.getAllCart();
  }

  calctotal(){
    this.totalPrice = this.resvcabService.cabs.reduce((prev, next) => prev + ((next['price'] * next['quantity']) + (next['unitPrice'] * (next['tripDistance'] * next['quantity']))), 0);
    // this.totalPrice = this.resvcabService.cabs.reduce((prev, next) => prev + (next['price'] * next['quantity']), 0);
  }

  deleteCart(cartId:any){
    //alert(cabId)
    this.cartService.deleteCart(cartId).subscribe({
      next:(result:any)=> {
        if(result=="Cart details deleted successfully"){
          alert("cart details deleted successfully")
        }else {
          alert("cart details didn't delete")
        }
      },
      error:(error:any)=> console.log(error),
      complete:()=>{
        console.log("completed");
        this.loaddata();
      }
    })
  }   

}








// $("#pickupLoc").on('keyup change', function(){
//   if($(this).val() != ""){
//     let values = $(this).serialize();
//     $("#pickupLocVal").html(values).val();
//     $(".pickupLoc").show();
//   }else{
//     $(".pickupLoc").hide();
//   }
//   //console.log($('#pickupLoc').val());
// });
// $("#age").on('blur', function(){
//   if($(this).val() != ""){
//     $("#ageVal").text($(this).val());
//     $(".age").show();
//   }else{
//     $(".age").hide();
//   }
// });
// $("#gender").on('change', function(){
//   if($(this).val() != ""){
//     $("#genderVal").text($("#gender option:selected").text());
//     $(".gender").show();
//   }else{
//     $(".gender").hide();
//   }
// });

