import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ICard} from "../../../interfaces";
import {getShoppingItemCount} from "../../../store/selectors";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {actions} from "../../../store/actions";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {
  @Input() card!: ICard;

  shoppingItemCount$!: Observable<number>;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.shoppingItemCount$ = this.store.select(getShoppingItemCount(this.card.id));
  }

  decreaseItemCount(id: string) {
    this.store.dispatch(actions.decreaseShoppingCardCount({id}));
  }

  increaseItemCount(card: ICard) {
    this.store.dispatch(actions.increaseShoppingCardCount({card}));
  }
}
