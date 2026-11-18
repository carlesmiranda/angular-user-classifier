import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { Customer, CustomerDTO } from '../../models/customer.model';
import {
  loadCustomersInfoAction,
  loadCustomersInfoFailureAction,
  loadCustomersInfoSuccessAction,
} from './customers.actions';
import { obtenerPerfil } from '../../utils/customers.utils';

const API_URL = '/corp/hr/hg-be-kata-data.json';

@Injectable()
export class CustomersEffects {
  actions$ = inject(Actions);
  http = inject(HttpClient);

  loadCustomers$ = createEffect(() =>
    this.actions$.pipe(
      //LoadCustomers
      ofType(loadCustomersInfoAction),
      switchMap(() => {
        return this.http.get<CustomerDTO[]>(API_URL).pipe(
          map((backendData) => {
            const customers: Customer[] = backendData.map((customer) => ({
              id: customer.id,
              age: customer.age,
              name: customer.name ?? '',
              profile: obtenerPerfil(customer.name),
            }));
            return loadCustomersInfoSuccessAction({ customers: customers });
          }),
          //http fails
          catchError((error: HttpErrorResponse) => {
            return of(loadCustomersInfoFailureAction({ error: `Could not load customers (error ${error.status})` }));
          }),
        );
      }),
    ),
  );
}
