import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CustomerStateInterface } from "./customersState.interface";
import { ordenarClientes } from "../../utils/customers.utils";


export const selectCustomersState = createFeatureSelector<CustomerStateInterface>('customers');

export const selectAllCustomers = createSelector(
    selectCustomersState,
    (state: CustomerStateInterface) => state.customers
);

export const selectCustomersIsLoading = createSelector(
    selectCustomersState,
    (state: CustomerStateInterface) => state.isLoading
);

export const selectCustomersError = createSelector(
    selectCustomersState,
    (state: CustomerStateInterface) => state.error
);

export const selectSortBy = createSelector(
    selectCustomersState,
    (state: CustomerStateInterface) => state.sortBy
);

export const selectSortedCustomers = createSelector(
  selectAllCustomers,
  selectSortBy, 
  (customers, sortBy) => ordenarClientes(customers, sortBy)
);

