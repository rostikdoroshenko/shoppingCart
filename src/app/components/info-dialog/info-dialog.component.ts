import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ICard} from "../../interfaces";
import {actions} from "../../store/actions";
import {Store} from "@ngrx/store";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrl: './info-dialog.component.scss'
})
export class InfoDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ICard, private store: Store, private snackbar: MatSnackBar) {
  }

  addToCart() {
    this.store.dispatch(actions.addCardToShop({card: this.data}));
    this.snackbar.open('Added to Cart!', '', {
      horizontalPosition: "center",
      verticalPosition: "top",
      duration: 2000
    });
  }
}
