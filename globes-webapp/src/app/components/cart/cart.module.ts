import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart.component';
import { BookAgainComponent } from './book-again/book-again.component';
import { SavedItemsComponent } from './saved-items/saved-items.component';


@NgModule({
  declarations: [
    CartComponent,
    BookAgainComponent,
    SavedItemsComponent
  ],
  imports: [
    CommonModule,
    RouterModule, 
    ReactiveFormsModule
  ]
})
export class CartModule { }
