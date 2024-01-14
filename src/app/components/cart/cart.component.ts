import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {getUniqShoppingContent} from "../../store/selectors";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  shoppingContent$ = this.store.select(getUniqShoppingContent);

    constructor(private store: Store) {
    }
}
