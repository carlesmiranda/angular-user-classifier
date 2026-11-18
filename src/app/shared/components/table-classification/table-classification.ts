import { Component, inject, OnInit } from '@angular/core';
import { Customer } from '../../../models/customer.model';
import { Store } from '@ngrx/store';
import {  
  selectCustomersError,
  selectCustomersIsLoading,
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
export class TableClassification implements OnInit{
  private store = inject(Store);
  sortedCustomers$ = this.store.select(selectSortedCustomers);
  sortBy$ = this.store.select(selectSortBy);
  isLoading$ = this.store.select(selectCustomersIsLoading);
  error$ = this.store.select(selectCustomersError);

  

  ngOnInit() {
    this.store.dispatch(loadCustomersInfoAction());
  }

  changeSort(value: string) {
    this.store.dispatch(changeSortCustomersAction({ sortBy: value as keyof Customer }));
  }
}
