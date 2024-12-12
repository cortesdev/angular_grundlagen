import { NgClass } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.sass'
})
export class CustomerFormComponent implements OnInit {
  @Output()
  customerSubmit = new EventEmitter();

  @Input()
  formData ? : Customer;

  ngOnInit(): void {
    console.log(this.formData);
    if(this.formData !== void 0) {
      this.customerGroup.patchValue(this.formData);
    }
  }


  customerGroup = inject(FormBuilder).group({
    name: [
      '', [
        Validators.required,
        Validators.minLength(2),
      ]
    ],
    creditLimit: [
      0, [
        Validators.required,
        Validators.min(0),
        ]
      ]
   })

   formSubmitHandler(){
    const customer = this.customerGroup.value;
    console.log(customer);

    this.customerSubmit.emit(customer)
   }
}
