import { Component } from '@angular/core';
import {actions} from "../../store/actions";
import {getCurrentPage, getPages} from "../../store/selectors";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  page$ = this.store.select(getCurrentPage);
  pages$ = this.store.select(getPages);

  constructor(private store: Store, public router: Router) {
  }
  changePage(page: number): void {
    this.store.dispatch(actions.changePageData({page}))
  }
}
