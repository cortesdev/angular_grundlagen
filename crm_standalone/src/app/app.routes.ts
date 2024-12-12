import { Routes } from '@angular/router';
import { customerRoutes } from './pages/customer/customer.routes';
import { DefaultPageComponent } from './pages/default-page/default-page.component';
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
