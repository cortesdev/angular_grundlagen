import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Customer } from '../../model/customer';
import { CustomerService } from '../../services/customer.services';
import { ErrorBoxComponent } from "../../../../components/error-box/error-box.component";

@Component({
  selector: 'app-customer-list',
  imports: [CommonModule, ErrorBoxComponent],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.sass'
})
export class CustomerListComponent {
  loading = false;
  errorMessage: null | string = null;
  customers: Customer[] = [];

  customerService = inject(CustomerService);

  ngOnInit(): void {
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
}
