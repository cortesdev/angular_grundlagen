import { Routes } from "@angular/router";
import { CustomerComponent } from "./customer.component";
import { CustomerEditComponent } from "./views/customer-edit/customer-edit.component";
import { CustomerListComponent } from "./views/customer-list/customer-list.component";
import { CustomerNewComponent } from "./views/customer-new/customer-new.component";

export const customerRoutes: Routes = [
    {
        path: 'dashboard',
        component: CustomerComponent,
        children: [
             {
                path: '',
                component: CustomerListComponent
             },
             {
                path: 'new',
                component: CustomerNewComponent
             },
             {
                path: 'edit/:customerId',
                component: CustomerEditComponent
             }
        ]
    }
]