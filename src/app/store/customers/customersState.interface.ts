import { Customer } from '../../models/customer.model';

export interface CustomerStateInterface {
  customers: Customer[];
  isLoading: boolean;
  error: string | null;
  sortBy: keyof Customer;
}
