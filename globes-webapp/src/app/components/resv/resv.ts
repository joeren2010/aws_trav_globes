export class Resv {
   constructor(
      public resvId?: number,
      public resvDate?: Date,
      public clientName?: string,
      public clientId?: string,
      public clientEmail?: string,
      public clientPhone?: string,
      public cartId?: string,
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
      public driverId?: string,
      public cabId?: string,
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
   ) { }
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
   ) { }
}






// export class Resv { 
//    constructor(
//       resvDate?: Date,
//       clientName?: string,
//       clientId?: string,
//       clientEmail?: string,
//       clientPhone?: string,
//       cartId?: string,
//       pickupLoc?: string,
//       pickupDate?: Date,
//       pickupTime?: string,
//       dropoffLoc?: string,
//       dropoffDate?: Date,
//       dropoffTime?: string,
//       tripDistance?: number,
//       unitPrice?: number,
//       itemsSubTotal?: number,
//       totalAmount?: number;
//       driverName?: string,
//       driverId?: string,
//       cabId?: string,
//       resvStatus?: string,
//       cabTitle?: string,
//       price?: number,
//       quantity?: number,
//       totalPrice?: number,
//    ) { }
// }
// class ResvItem {
//    constructor(
//       public resvItemId?: number,
//       public cabCategory?: string,
//       public cabCode?: string,
//       public cabDescription?: string,
//       public cabImg?: string,
//       public cabTitle?: string,
//       public quantity?: number,
//       public totalPrice?: number
//    ) { }
// }



// export class Resv {
//    constructor(
//     public resvId?: number,
//     public resvDate?: Date,
//     public clientName?: string,
//     public clientId?: string,
//     public clientEmail?: string,
//     public clientPhone?: string,
//     public cartId?: string,
//     public pickupLoc?: string,
//     public pickupDate?: Date,
//     public pickupTime?: string,
//     public dropoffLoc?: string,
//     public dropoffDate?: Date,
//     public dropoffTime?: string,
//     public tripDistance?: number,
//     public unitPrice?: number,
//     public itemsSubTotal?: number,
//     public driverName?: string,
//     public driverId?: string,
//     public cabId?: string,
//     public resvStatus?: string,
//     public cabTitle?: string,
//     public price?: number,
//     public quantity?: number,
//     public paymentMethod?: number,
//     public paymentMethodTitle?: string,
//     public paymentStatus?: number,
//     public paymentStatusTitle?: string,
//     public shipmentCharges?: number,
//     public totalItems?: number,
//     public totalAmount?: number,
//     public resvitems?: Array<ResvItem>
//    ) { }
// }
// class ResvItem {
//    constructor(
//       public resvItemId?: number,
//       public cabCategory?: string,
//       public cabCode?: string,
//       public cabDescription?: string,
//       public cabImg?: string,
//       public cabTitle?: string,
//       public quantity?: number,
//       public totalPrice?: number
//    ) { }
// }