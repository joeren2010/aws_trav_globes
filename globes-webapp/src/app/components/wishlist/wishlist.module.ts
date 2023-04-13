import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { WishlistComponent } from './wishlist.component';
import { MyListComponent } from './my-list/my-list.component';


@NgModule({
  declarations: [
    WishlistComponent,
    MyListComponent
  ],
  imports: [
    CommonModule,
    RouterModule, 
    ReactiveFormsModule
  ]
})
export class WishlistModule { }
