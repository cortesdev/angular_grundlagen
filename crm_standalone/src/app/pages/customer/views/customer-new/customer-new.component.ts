import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomerFormComponent } from "../../customer-form/customer-form.component";

@Component({
  selector: 'app-customer-new',
  imports: [CommonModule, CustomerFormComponent],
  templateUrl: './customer-new.component.html',
  styleUrl: './customer-new.component.sass'
})
export class CustomerNewComponent {

}
