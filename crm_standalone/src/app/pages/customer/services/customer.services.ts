import { Observable } from "rxjs";
import { Customer } from "../model/customer";
import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment.development";


// const demoDaten = [
//     {
//       id: 3,
//       name: 'Tim',
//       creditLimit: 3000
//     },
//     {
//       id: 5,
//       name: 'Tom',
//       creditLimit: 600
//     },
//   ]

  // const url = 'http://localhost:3002/customers/'

  const url = environment.api + 'customers/'

  @Injectable({
    providedIn: 'root'
  })

  export class CustomerService {
    // constructor() {}

    http = inject(HttpClient);


    getAllCustomer(): Observable<Customer[]> {
        // return of(demoDaten)
        return this.http.get<Customer[]>(url)
    }

    getById(id: number): Observable<Customer> {
      return this.http.get<Customer>(url+ id)
    }

    deleteById(id: number) {
      return this.http.delete(url + id)
    }

    postCustomer( customer: Partial<Customer>): Observable<Customer> {
      return this.http.post<Customer>( url,  customer)
    }

    putCustomer(customer: Customer): Observable<Customer> {
      return this.http.put<Customer>( url + customer.id, customer)
    }
  }