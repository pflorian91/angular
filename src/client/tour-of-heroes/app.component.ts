import {
  Component
} from '@angular/core';

@Component({
  selector: 'sd-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/heroes">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  providers: []
})

export class AppComponent {
  
  title = 'Tour of Heroes';
  
}
