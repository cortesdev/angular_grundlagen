import { JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../../environments/environment.development';
import { ErrorBoxComponent } from "../../../../components/error-box/error-box.component";
import { LoadingIndicatorComponent } from "../../../../components/loading-indicator/loading-indicator.component";
import { CustomerFormComponent } from "../../customer-form/customer-form.component";
import { Customer } from '../../model/customer';
import { CustomerService } from '../../services/customer.services';


@Component({
  selector: 'app-customer-edit',
  imports: [CustomerFormComponent, JsonPipe, ErrorBoxComponent, LoadingIndicatorComponent],
  templateUrl: './customer-edit.component.html',
  styleUrl: './customer-edit.component.sass'
})


export class CustomerEditComponent implements OnInit {
  url = environment.api + 'customers/'

  id = inject(ActivatedRoute).snapshot.params['customerId'];
  customer!: Customer;
 
  loading = false;
  errorMessage: null | string = null;
  customerService  = inject(CustomerService);
  router = inject(Router)

  ngOnInit(): void {
    this.loadCustomer()
  };

  loadCustomer() {
    this.loading = true;
    this.errorMessage = null;
    this.customerService.getById(this.id)
    .subscribe({
      next: (customer) => {
        this.customer = customer;
        // console.log(customer);  
        this.loading = false;        
        // this.router.navigate(['/dashboard'])
      },
      error: (e: Error) => {
        this.loading = false;
        this.errorMessage = e.message;
      }
    })
  }

  updateCustomer(customer: Customer) {
    customer.id = this.id;
    this.loading = true;
    this.errorMessage = null;

    // console.log(customer)
    this.customerService.putCustomer(customer)
    .subscribe({
      next: () => {
       this.router.navigate(['/dashboard'])
      },
      error: (e: Error) => {
        this.loading = false;
        this.errorMessage = e.message;
      }
    })
  }
}
