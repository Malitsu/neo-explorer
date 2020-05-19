import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
             <nav>
                <a routerLink="/asteroids" routerLinkActive="active">Browse</a>
                <a routerLink="/search" routerLinkActive="active">Lookup</a>
                <a routerLink="/info" routerLinkActive="active">Info</a>
             </nav>
             <div>
              <router-outlet></router-outlet>
            </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Near Earth Object Explorer';
}
