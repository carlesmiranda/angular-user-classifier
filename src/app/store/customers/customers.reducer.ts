import { createReducer, on } from "@ngrx/store";
import { CustomerStateInterface } from "./customersState.interface";
import { changeSortCustomersAction, loadCustomersInfoAction, loadCustomersInfoFailureAction, loadCustomersInfoSuccessAction } from "./customers.actions";

const initialState: CustomerStateInterface = {
    customers: [],
    isLoading: false,
    error: null,
    sortBy: 'id'
}

export const customerReducer = createReducer(
    initialState,
    
    on(loadCustomersInfoAction, (state) => ({
        ...state,
        isLoading: true,
        error: null
    })),

    on(loadCustomersInfoSuccessAction, (state, {customers}) => ({
        ...state,
        customers,
        isLoading: false,
        error: null,
    })),
    
    on(loadCustomersInfoFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error,
    })),

    on(changeSortCustomersAction, (state, {sortBy}) => ({
        ...state,
        sortBy,
    }))
)