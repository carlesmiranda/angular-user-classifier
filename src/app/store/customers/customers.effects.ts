import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { Customer } from '../../models/customer.model.';
import {
  loadCustomersInfoAction,
  loadCustomersInfoFailureAction,
  loadCustomersInfoSuccessAction,
} from './customers.actions';

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
        return this.http.get<Customer[]>(API_URL).pipe(
          map((backendData) => {
            const customers: Customer[] = backendData.map((customer) => ({
              id: customer.id,
              age: customer.age,
              name: customer.name,
              profile: this.obtenerPerfil(customer.name)
            }));
            return loadCustomersInfoSuccessAction({ customers: customers });
          }),
          //http fails
          catchError((error) => {
            return of(loadCustomersInfoFailureAction({ error }));
          }),
        );
      }),
    ),
  );

  obtenerPerfil(name: string) {
    const PERFIL_PIRI_PIRI = 'Piri Piri Lovers';
    const PERFIL_POLLO_HIERBAS = 'Pollo con Hierbas Lovers';

    if (!name) return PERFIL_PIRI_PIRI;

    return (name.toLowerCase().includes('b') || name.toLowerCase().includes('h')) ? PERFIL_POLLO_HIERBAS : PERFIL_PIRI_PIRI;
  }
}
