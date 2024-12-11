import { Observable, of } from "rxjs";
import { Customer } from "../model/customer";
import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


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

  const url = 'http://localhost:3002/customers'

  @Injectable({
    providedIn: 'root'
  })

  export class CustomerService {
    constructor() {}

    http = inject(HttpClient);


    getAllCustomer(): Observable<Customer[]> {
        // return of(demoDaten)
        return this.http.get<Customer[]>(url)
    }
  }