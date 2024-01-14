import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {
  getContentForOnePage,
  getError,
  isLoading
} from "../../store/selectors";
import { ICard} from "../../interfaces";
import {MatDialog} from "@angular/material/dialog";
import {InfoDialogComponent} from "../info-dialog/info-dialog.component";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardListComponent {
  getContentForOnePage$ = this.store.select(getContentForOnePage);
  isLoading$ = this.store.select(isLoading);
  error$ = this.store.select(getError);

  constructor(private store: Store,
              private matDialog: MatDialog) {}

  openDialog(card: ICard) {
    this.matDialog.open(InfoDialogComponent, {
      data: card,
      width: '700px'
    });
  }
}
