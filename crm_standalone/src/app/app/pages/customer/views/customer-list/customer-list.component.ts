import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Customer } from '../../model/customer';

@Component({
  selector: 'app-customer-list',
  imports: [CommonModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.sass'
})
export class CustomerListComponent {
customers: Customer[] = [
  {
    id: 3,
    name: 'Tim',
    creditLimit: 3000
  },
  {
    id: 5,
    name: 'Tom',
    creditLimit: 3000
  },
]
}
