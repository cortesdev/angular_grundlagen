import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CustomerFormComponent } from "../../customer-form/customer-form.component";
import { Customer } from '../../model/customer';
import { CustomerService } from '../../services/customer.services';
import { Router } from '@angular/router';
import { LoadingIndicatorComponent } from "../../../../components/loading-indicator/loading-indicator.component";
import { ErrorBoxComponent } from "../../../../components/error-box/error-box.component";

@Component({
  selector: 'app-customer-new',
  imports: [CommonModule, CustomerFormComponent, LoadingIndicatorComponent, ErrorBoxComponent],
  templateUrl: './customer-new.component.html',
  styleUrl: './customer-new.component.sass'
})
export class CustomerNewComponent {

  loading = false;
  errorMessage: null | string = null;
  customerService  = inject(CustomerService);
  router = inject(Router)

  createCustomer(customer: Partial<Customer>) {
    console.log(customer);
    
    this.loading = true;
    this.errorMessage = null;
    this.customerService.postCustomer(customer)
    .subscribe({
      next: () => {
        this.router.navigate(['/dashboard'])
        // console.log(customer);  
        this.loading = false;
      },
      error: (e: Error) => {
        this.loading = false;
        this.errorMessage = e.message;
      }
    })
  }
}
