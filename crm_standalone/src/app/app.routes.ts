import { Routes } from '@angular/router';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { DefaultPageComponent } from './pages/default-page/default-page.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { HelpComponent } from './pages/help-component/help-component.component';
import { TemplateSyntaxPageComponent } from './pages/template-syntax-page/template-syntax-page.component';
import { CustomerListComponent } from './pages/customer/views/customer-list/customer-list.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/start',
        pathMatch: 'full'  
    },
    {
        path: 'start',
        component: StartPageComponent
    },
    {
        path: 'dashboard',
        component: CustomerComponent,
        children: [{
            path: '',
            component: CustomerListComponent
        }]
    },
    {
        path: 'template-syntax',
        component: TemplateSyntaxPageComponent
       },
    {
        path: 'help',
        component: HelpComponent
    },
    {
        path: '**',
        component: DefaultPageComponent
    }
];
