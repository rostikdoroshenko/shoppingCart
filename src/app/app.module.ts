import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {CardListComponent} from "./components/card-list/card-list.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {CardComponent} from "./components/card/card.component";
import {StoreModule} from '@ngrx/store';
import {reducers} from "./store/state";
import { EffectsModule } from '@ngrx/effects';
import {Effects} from "./store/effects";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSelectModule} from "@angular/material/select";
import {AppRoutingModule} from "./app-routing.module";
import {CartComponent} from "./components/cart/cart.component";
import {CartItemComponent} from "./components/cart/cart-item/cart-item.component";
import {InfoDialogComponent} from "./components/info-dialog/info-dialog.component";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {PriceFiltersComponent} from "./components/price-filters/price-filters.component";
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardComponent,
    CartComponent,
    CartItemComponent,
    InfoDialogComponent,
    HeaderComponent,
    FooterComponent,
    PriceFiltersComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([Effects]),
    MatProgressBarModule,
    MatSelectModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
