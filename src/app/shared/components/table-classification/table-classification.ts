import { Component } from '@angular/core';
import { Customer } from '../../../models/customer.model.';
import { Store } from '@ngrx/store';
import { selectAllCustomers, selectPiriPiriLoversCustomers, selectPolloHierbasLoversCustomers } from '../../../store/customers/customers.selectors';
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
  piriPiriLovers$;
  piriPiriLovers: Customer[] = [];
  polloHierbasLovers$;
  polloHierbasLovers: Customer[] = [];
  customers$;
  customers: Customer[] = [];
  

  constructor(private store: Store) {
    this.allCustomers$ = this.store.select(selectAllCustomers);
    this.piriPiriLovers$ = this.store.select(selectPiriPiriLoversCustomers);
    this.polloHierbasLovers$ = this.store.select(selectPolloHierbasLoversCustomers);
    this.customers$ = this.allCustomers$;
  }

  ngOnInit() {
    this.store.dispatch(loadCustomersInfoAction());

    this.allCustomers$.subscribe((customers) => {
      this.allCustomers = customers;
      console.log(this.allCustomers);
    });

    console.log(this.allCustomers)
  }

  clickBtnType(type: string) {
    if (type === 'piri') return this.customers$ = this.piriPiriLovers$;
    if (type === 'hierbas') return this.customers$ = this.polloHierbasLovers$;
    
    return this.customers$ = this.allCustomers$;
  }



  
}
