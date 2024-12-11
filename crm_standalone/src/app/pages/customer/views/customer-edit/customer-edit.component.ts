import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerFormComponent } from "../../customer-form/customer-form.component";

@Component({
  selector: 'app-customer-edit',
  imports: [CustomerFormComponent],
  templateUrl: './customer-edit.component.html',
  styleUrl: './customer-edit.component.sass'
})
export class CustomerEditComponent {
  id = inject(ActivatedRoute).snapshot.params['customerId'];
}
