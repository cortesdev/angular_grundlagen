import { Routes } from '@angular/router';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { DefaultPageComponent } from './pages/default-page/default-page.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { HelpComponent } from './pages/help-component/help-component.component';
import { TemplateSyntaxPageComponent } from './pages/template-syntax-page/template-syntax-page.component';
import { CustomerListComponent } from './pages/customer/views/customer-list/customer-list.component';
import { customerRoutes } from './pages/customer/customer.routes';
import { helpRoutes } from './pages/help-component/help-component.routes';
import { startPageRoutes } from './pages/start-page/start-page.Routes';
import { templateSyntaxRoutes } from './pages/template-syntax-page/template-syntax.Routes';

export const routes: Routes = [
    ...customerRoutes,
    ...helpRoutes,
    ...startPageRoutes,
    ...templateSyntaxRoutes,
   
    
    {
        path: '**',
        component: DefaultPageComponent
    }
];
