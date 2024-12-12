import { Routes } from "@angular/router";
import { StartPageComponent } from "./start-page.component";

export const startPageRoutes: Routes = [
    {
        path: '',
        redirectTo: '/start',
        pathMatch: 'full'  
    },
    {
        path: 'start',
        component: StartPageComponent
    }
]