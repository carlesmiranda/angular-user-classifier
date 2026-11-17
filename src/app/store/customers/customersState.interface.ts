import { Customer } from '../../models/customer.model';

export interface CustomerStateInterface {
  customers: Customer[];
  isLoading: boolean;
  error: any;
  sortBy: keyof Customer;
}
