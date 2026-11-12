import { Component } from '@angular/core';
import { Customer } from '../../../models/customer.model.';
import { Store } from '@ngrx/store';
import { selectAllCustomers } from '../../../store/customers/customers.selectors';
import { loadCustomersInfoAction } from '../../../store/customers/customers.actions';
import { AsyncPipe } from '@angular/common';

@Component({
  imports: [AsyncPipe],
  selector: 'app-table-classification',
  styleUrl: './table-classification.scss',
  templateUrl: './table-classification.html',
})
export class TableClassification {
  allCustomers$;
  allCustomers: Customer[] = [];

  constructor(private store: Store) {
    this.allCustomers$ = this.store.select(selectAllCustomers);
  }

  ngOnInit() {
    this.store.dispatch(loadCustomersInfoAction());

    this.allCustomers$.subscribe((customers) => {
      this.allCustomers = customers;
      console.log(this.allCustomers);
    });

    console.log(this.allCustomers)
  }

  
}
