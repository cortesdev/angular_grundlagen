import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StartPageComponent } from "./pages/start-page/start-page.component";
import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    StartPageComponent, 
    NavigationComponent,
  ],

  template: ` 
  <app-navigation></app-navigation>
  
  <div class='container py-4 mx-2'>
  <!-- <h1>CRM</h1> -->
    <router-outlet />
  </div>
  <!-- <app-start-page></app-start-page> -->
  ` ,
  
})
export class AppComponent {
  title = 'crm_standalone';
}
