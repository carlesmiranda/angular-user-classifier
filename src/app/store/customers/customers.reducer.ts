import { createReducer, on } from "@ngrx/store";
import { CustomerStateInterface } from "./customersState.interface";
import { loadCustomersInfoAction, loadCustomersInfoFailureAction, loadCustomersInfoSuccessAction } from "./customers.actions";

const initialState: CustomerStateInterface = {
    customers: [],
    isLoading: false,
    error: null    
}

export const customerReduer = createReducer(
    initialState,
    
    on(loadCustomersInfoAction, (state) => ({
        ...state,
        isLoading: true,
        error: null
    })),

    on(loadCustomersInfoSuccessAction, (state, {customers}) => ({
        ...state,
        customers: customers,
        isLoading: false,
        error: null,
    })),
    
    on(loadCustomersInfoFailureAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error: error
    }))
)