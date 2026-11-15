import { createFeatureSelector, createSelector } from "@ngrx/store"
import { CustomerStateInterface } from "./customersState.interface"
import { Customer } from "../../models/customer.model.";


export const selectCustomersState = createFeatureSelector<CustomerStateInterface>('customers');

export const selectAllCustomers = createSelector(
    selectCustomersState,
    (state: CustomerStateInterface) => state.customers
)

export const selectCustomersIsLoading = createSelector(
    selectCustomersState,
    (state: CustomerStateInterface) => state.isLoading
)

export const selectCustomersError = createSelector(
    selectCustomersState,
    (state: CustomerStateInterface) => state.error
)

export const selectSortBy = createSelector(
    selectCustomersState,
    (state: CustomerStateInterface) => state.sortBy
)

export const selectSortedCustomers = createSelector(
  selectAllCustomers,
  selectSortBy, 
  (customers, sortBy) => ordenarClientes(customers, sortBy)
);

function ordenarClientes(customers: Customer[], sortBy: keyof Customer){
    const copy = [ ...customers ];
    
    return copy.sort((a, b) => {
        const valorA = a[sortBy];
        const valorB = b[sortBy];

        if (typeof valorA === 'number' && typeof valorB === 'number') {
            return valorA - valorB;
        }

        return String(valorA).localeCompare(String(valorB));
    });
}