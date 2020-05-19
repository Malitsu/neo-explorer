import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { AsteroidsService } from './asteroids.service'

@Component({
  selector: 'app-asteroid-detail',
  template: `<h2>{{asteroid.name}}</h2>
             <p>
                <b>Estimated diameter max:</b> {{asteroid.estimated_diameter.kilometers.estimated_diameter_max}} kilometers<br/>
                <b>Estimated diameter min:</b> {{asteroid.estimated_diameter.kilometers.estimated_diameter_min}} kilometers<br/>
                <b>Close approach time:</b> {{asteroid.close_approach_data[0].close_approach_date_full}}<br/>
                <b>First observation date:</b> {{asteroid.orbital_data.first_observation_date}}<br/>
                <b>Last observation date:</b> {{asteroid.orbital_data.last_observation_date}}<br/>
                <b>Orbit class description:</b> {{asteroid.orbital_data.orbit_class.orbit_class_description}}<br/>
                <b>Potentially hazardous:</b> {{asteroid.is_potentially_hazardous_asteroid}}<br/>
                <b>Link:</b> <a href={{asteroid.nasa_jpl_url}}>{{asteroid.nasa_jpl_url}}</a>
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