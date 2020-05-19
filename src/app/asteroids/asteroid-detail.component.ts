import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { AsteroidsService } from './asteroids.service'

@Component({
  selector: 'app-asteroid-detail',
  template: `<h2>{{asteroid.name}}</h2>
             <p>
                Estimated diameter max: {{asteroid.estimated_diameter.kilometers.estimated_diameter_max}} kilometers<br/>
                Estimated diameter min: {{asteroid.estimated_diameter.kilometers.estimated_diameter_min}} kilometers<br/>
                Close approach time: {{asteroid.close_approach_data[0].close_approach_date_full}}<br/>
                First observation date: {{asteroid.orbital_data.first_observation_date}}<br/>
                Last observation date: {{asteroid.orbital_data.last_observation_date}}<br/>
                Orbit class description: {{asteroid.orbital_data.orbit_class.orbit_class_description}}
             </p>`
})

export class AsteroidDetailComponent implements OnInit {
  asteroid : any = {id: undefined}

  back() {
    this.router.navigate(['asteroids', {id: this.asteroid.id}])
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private asteroidsService : AsteroidsService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const id = params['id']
      this.asteroidsService.fetchAsteroid(id, (result) => {
        this.asteroid = result
        console.log(this.asteroid)
      })
    })
  }
}