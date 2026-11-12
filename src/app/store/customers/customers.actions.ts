import { createAction, props } from '@ngrx/store';
import { Customer } from '../../models/customer.model.';

enum ActionsTypes {
  LOAD_CUSTOMERS_INFO = '[Customers] Load Customers Info',
  LOAD_CUSTOMERS_INFO_SUCCESS = '[Customers] Load Customers Info Success',
  LOAD_CUSTOMERS_INFO_FAILURE = '[Customers] Load Customers Info Failure',
}

export const loadCustomersInfoAction = createAction(ActionsTypes.LOAD_CUSTOMERS_INFO);
export const loadCustomersInfoSuccessAction = createAction(
  ActionsTypes.LOAD_CUSTOMERS_INFO_SUCCESS,
  props<{ customers: Customer[] }>(),
);
export const loadCustomersInfoFailureAction = createAction(
  ActionsTypes.LOAD_CUSTOMERS_INFO_FAILURE,
  props<{ error: any }>(),
);
