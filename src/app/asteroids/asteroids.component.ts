import { Component, OnInit, OnChanges } from '@angular/core'
import { AsteroidsService } from './asteroids.service'
import { Input } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { AsteroidsRoutingModule } from './asteroids-routing.module'

@Component({
  selector: 'app-asteroids',
  template: `<table mat-table [dataSource]="asteroids">
                <ng-container matColumnDef="nameColumn">
                  <th mat-header-cell *matHeaderCellDef> Name </th>
                  <td mat-cell *matCellDef="let asteroid">
                    <a routerLink="asteroids/{{asteroid.id}}">
                      {{asteroid.name}}
                    </a>
                  </td>
                </ng-container>
                <ng-container matColumnDef="diameterColumn">
                  <th mat-header-cell *matHeaderCellDef> Maximum Diameter (km) </th>
                  <td mat-cell *matCellDef="let asteroid"> {{asteroid.estimated_diameter.kilometers.estimated_diameter_max}} </td>
                </ng-container>
                <ng-container matColumnDef="closeColumn">
                  <th mat-header-cell *matHeaderCellDef> Close Approach </th>
                  <td mat-cell *matCellDef="let asteroid">
                    <span *ngIf="asteroid.close_approach_data[0]">{{asteroid.close_approach_data[0].close_approach_date}}</span>
                  </td>
                </ng-container>
                <ng-container matColumnDef="orbitColumn">
                  <th mat-header-cell *matHeaderCellDef> Orbiting Body </th>
                  <td mat-cell *matCellDef="let asteroid">
                    <span *ngIf="asteroid.close_approach_data[0]">{{asteroid.close_approach_data[0].orbiting_body}}</span>
                  </td>
                </ng-container>
                <ng-container matColumnDef="missColumn">
                  <th mat-header-cell *matHeaderCellDef> Miss Distance </th>
                  <td mat-cell *matCellDef="let asteroid">
                    <span *ngIf="asteroid.close_approach_data[0]">{{asteroid.close_approach_data[0].miss_distance.kilometers}}</span>
                  </td>
                </ng-container>
                <ng-container matColumnDef="hazardColumn">
                  <th mat-header-cell *matHeaderCellDef> Potentially Hazardous </th>
                  <td mat-cell *matCellDef="let asteroid"> {{asteroid.is_potentially_hazardous_asteroid}} </td>
                </ng-container>
                <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
                <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
             </table>`,
  styleUrls: ['./asteroids.component.css']
})
export class AsteroidsComponent implements OnInit, OnChanges {

  @Input() startingDate : string
  @Input() endingDate : string
  @Input() hazardous : boolean

  asteroidsService : AsteroidsService
  asteroids = []
  selectedId : number
  displayedColumns = ['nameColumn', 'diameterColumn', 'closeColumn', 'orbitColumn', 'missColumn', 'hazardColumn']

  constructor(asteroidsService : AsteroidsService, private activatedRoute : ActivatedRoute) {
    this.asteroidsService = asteroidsService
  }

  ngOnInit() : void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.selectedId = params['id'];
    })
    this.asteroidsService.fetchAsteroids(this.startingDate, this.endingDate, (result) => {
      this.asteroids = result
  })
  }

  ngOnChanges() : void {
    this.asteroidsService.fetchAsteroids(this.startingDate, this.endingDate, (result) => {
      if(this.hazardous) {
        this.asteroids = result.filter(asteroid => asteroid.is_potentially_hazardous_asteroid)
      } else {
        this.asteroids = result
      }
  })
  }

}
