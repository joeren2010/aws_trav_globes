import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ResvcabService } from 'src/app/servces/resvcab.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(
    public resvcabService: ResvcabService,  
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
  }

  removeCabFromWishlist(prdIdx: number) {
    let elements = this.resvcabService.wishlistCabs.splice(prdIdx, 1);
    this.toast.info(elements[0]['title'], "Cab Removed From Wishlist");
  }

}
