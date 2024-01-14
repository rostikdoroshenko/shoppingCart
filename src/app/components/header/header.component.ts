import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {actions} from "../../store/actions";
import {debounceTime, distinctUntilChanged} from "rxjs";
import {Store} from "@ngrx/store";
import {FilterType} from "../../interfaces";
import {getSelectedFilterType, getShoppingCount} from "../../store/selectors";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  formGroup: FormGroup;
  shoppingCount$ = this.store.select(getShoppingCount);
  selectedType = FilterType.All;
  typeFilters: FilterType[] = [FilterType.All, FilterType.Appliances, FilterType.TVs, FilterType.Phones, FilterType.VideoGames, FilterType.Laptops];

  constructor(private store: Store, public router: Router) {
    this.store.select(getSelectedFilterType).subscribe(type => this.selectedType = type)
    this.formGroup = new FormGroup({
      input: new FormControl(''),
    });
    this.formGroup.controls['input'].valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      ).subscribe(search => {
        this.store.dispatch(actions.changeSearchData({search}));
      }
    );
  }

  changeFilterType(): void {
    this.store.dispatch(actions.changeFilterType({filterType: this.selectedType}));
  }

  clearFilters(): void {
    this.formGroup.controls['input'].setValue('');
    this.store.dispatch(actions.clearFilters());
  }
}
