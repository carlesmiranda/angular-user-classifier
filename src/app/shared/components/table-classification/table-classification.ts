import { Component, inject } from '@angular/core';
import { Customer } from '../../../models/customer.model';
import { Store } from '@ngrx/store';
import {
  selectAllCustomers,
  selectSortBy,
  selectSortedCustomers,
} from '../../../store/customers/customers.selectors';
import {
  changeSortCustomersAction,
  loadCustomersInfoAction,
} from '../../../store/customers/customers.actions';
import { AsyncPipe } from '@angular/common';

@Component({
  imports: [AsyncPipe],
  selector: 'app-table-classification',
  styleUrl: './table-classification.scss',
  templateUrl: './table-classification.html',
})
export class TableClassification {
  private store = inject(Store);
  allCustomers$ = this.store.select(selectSortedCustomers);
  sortBy$ = this.store.select(selectSortBy);

  constructor() {}

  ngOnInit() {
    this.store.dispatch(loadCustomersInfoAction());
  }

  changeSort(value: string) {
    this.store.dispatch(changeSortCustomersAction({ sortBy: value as keyof Customer }));
  }
}
