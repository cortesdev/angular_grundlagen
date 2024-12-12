import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Customer } from '../../model/customer';
import { CustomerService } from '../../services/customer.services';
import { ErrorBoxComponent } from "../../../../components/error-box/error-box.component";
import { LoadingIndicatorComponent } from "../../../../components/loading-indicator/loading-indicator.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  imports: [
    RouterLink,
    CommonModule, 
    ErrorBoxComponent, 
    LoadingIndicatorComponent],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.sass'
})

export class CustomerListComponent implements OnInit {
  loading = false;
  errorMessage: null | string = null;
  customers: Customer[] = [];

  customerService = inject(CustomerService);

  ngOnInit(): void {
    this.loadCustomers();
  }


  loadCustomers(): void {
    this.loading = true;
    this.customerService.getAllCustomer()
    .subscribe({
      next: (customers) => {
        this.customers = customers;
        this.loading = false;
      },
      error: (e: Error) => {
        this.loading = false;
        this.errorMessage = e.message;
      }
    })
  }

  deleteCustomer(id: number): void {
    this.loading = true;
    this.customerService.deleteById(id)
    .subscribe({
      next: () => {
        this.customers = this.customers.filter((customer) => {
          return customer.id !== id;
        });
        this.loading = false;
      },
      error: (e: Error) => {
        this.loading = false;
        this.errorMessage = e.message;
      }
    })
  }

}
