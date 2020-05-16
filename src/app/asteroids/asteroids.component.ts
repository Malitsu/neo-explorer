import { Component, OnInit, OnChanges, ViewChild } from '@angular/core'
import { AsteroidsService } from './asteroids.service'
import { Input } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Sort } from '@angular/material/sort'

@Component({
  selector: 'app-asteroids',
  template: `<table matSort (matSortChange)="sortData($event)">
                <tr>
                <th mat-sort-header="name">Name</th>
                <th mat-sort-header="diameter">Maximum Diameter (km)</th>
                <th mat-sort-header="approach">Close Approach</th>
                <th mat-sort-header="orbiting">Orbiting Body</th>
                <th mat-sort-header="distance">Miss Distance</th>
                <th mat-sort-header="hazardous">Potentially Hazardous</th>
                </tr>
                <tr *ngFor="let asteroid of sortedAsteroids">
                  <td><a routerLink="asteroids/{{asteroid.id}}">{{asteroid.name}}</a></td>
                  <td>{{asteroid.estimated_diameter.kilometers.estimated_diameter_max}}</td>
                  <td><span *ngIf="asteroid.close_approach_data[0]">{{asteroid.close_approach_data[0].close_approach_date}}</span></td>
                  <td><span *ngIf="asteroid.close_approach_data[0]">{{asteroid.close_approach_data[0].orbiting_body}}</span></td>
                  <td><span *ngIf="asteroid.close_approach_data[0]">{{asteroid.close_approach_data[0].miss_distance.kilometers}}</span></td>
                  <td>{{asteroid.is_potentially_hazardous_asteroid}}</td>
                </tr>
              </table>`,
  styleUrls: ['./asteroids.component.css']
})
export class AsteroidsComponent implements OnInit, OnChanges {

  @Input() startingDate : string
  @Input() endingDate : string
  @Input() hazardous : boolean

  asteroidsService : AsteroidsService
  asteroids = []
  sortedAsteroids = []
  selectedId : number

  sortData(sort: Sort) {
    const data = this.asteroids.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedAsteroids = data
      return
    }

    this.sortedAsteroids = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc'
      switch (sort.active) {
        case 'name': return this.compare(a.name, b.name, isAsc)
        case 'diameter': return this.compare(a.estimated_diameter.kilometers.estimated_diameter_max.toFixed(5), b.estimated_diameter.kilometers.estimated_diameter_max.toFixed(5), isAsc)
        case 'approach': return this.compare(a.close_approach_data[0].close_approach_date, b.close_approach_data[0].close_approach_date, isAsc)
        case 'orbiting': return this.compare(a.close_approach_data[0].orbiting_body, b.close_approach_data[0].orbiting_body, isAsc)
        case 'distance': return this.compare(Math.round(a.close_approach_data[0].miss_distance.kilometers), Math.round(b.close_approach_data[0].miss_distance.kilometers), isAsc)
        case 'hazardous': return this.compare(a.is_potentially_hazardous_asteroid, b.is_potentially_hazardous_asteroid, isAsc)
        default: return 0
      }
    })
  }

  compare(a: number | string | boolean, b: number | string | boolean, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1)
  }

  constructor(asteroidsService : AsteroidsService, private activatedRoute : ActivatedRoute) {
    this.asteroidsService = asteroidsService
  }

  ngOnInit() : void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.selectedId = params['id'];
    })
    this.asteroidsService.fetchAsteroids(this.startingDate, this.endingDate, (result) => {
      this.asteroids = result
      this.sortedAsteroids = this.asteroids.slice()
  })
  }

  ngOnChanges() : void {
    this.asteroidsService.fetchAsteroids(this.startingDate, this.endingDate, (result) => {
      if(this.hazardous) {
        this.asteroids = result.filter(asteroid => asteroid.is_potentially_hazardous_asteroid)
        this.sortedAsteroids = this.asteroids.slice()
      } else {
        this.asteroids = result
        this.sortedAsteroids = this.asteroids.slice()
      }
  })
  }

}
