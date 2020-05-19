import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { AsteroidsService } from './asteroids.service'

@Component({
  selector: 'app-search',
  template: `<form>
                <p>Search for a specific asteroid based on it's id.</p>
                <input [(ngModel)]="id" placeholder="id" name="id" />
             </form>
             <p><button (click)="lookup()">Find matches</button></p>
             <p><a routerLink="../asteroids/{{asteroid.id}}">{{asteroid.name}}</a></p>`,
  styles: [`a {
              text-decoration: none;
              color: orange;
            }         
            a:hover {
              font-weight: bold;
            }`]
})
export class SearchComponent implements OnInit {

  id : number
  asteroid : any

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private asteroidsService : AsteroidsService
  ) {}

  ngOnInit(): void {
  }

  lookup() : void {
    this.asteroidsService.fetchAsteroid(this.id, (result) => {
      this.asteroid = result
    })
  }

}
