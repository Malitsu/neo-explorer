import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { AsteroidsService } from './asteroids.service'

@Component({
  selector: 'app-asteroid-detail',
  template: `<h2>{{asteroid.id}}</h2>
             <button (click)="back()" href="">Back</button>`
})

export class AsteroidDetailComponent implements OnInit {
  asteroid : any = {id: undefined}

  back() {
    this.router.navigate(['asteroids', {id: this.asteroid.id}])
    console.log(this.asteroid.id)
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private asteroidsService : AsteroidsService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const id = params['id'];
      this.asteroidsService.fetchAsteroid(id, (result) => {
        this.asteroid = result
      })
    })
  }
}