import {Component, OnInit} from '@angular/core';
import {actions} from "./store/actions";
import {Store} from "@ngrx/store";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'shoppingCart';

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(actions.loadContent());
  }
}
