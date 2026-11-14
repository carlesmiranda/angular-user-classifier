import { createFeatureSelector, createSelector } from "@ngrx/store"
import { CustomerStateInterface } from "./customersState.interface"


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

export const selectPiriPiriLoversCustomers = createSelector(
    selectCustomersState,
    (state: CustomerStateInterface) => state.customers.filter(c => c.profile === 'Piri Piri Lovers')
)

export const selectPolloHierbasLoversCustomers = createSelector(
    selectCustomersState,
    (state: CustomerStateInterface) => state.customers.filter(c => c.profile === 'Pollo con Hierbas Lovers')
)