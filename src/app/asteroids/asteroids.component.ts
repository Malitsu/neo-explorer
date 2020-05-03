import { Component, OnInit } from '@angular/core'
import { AsteroidsService } from './asteroids.service'

@Component({
  selector: 'app-asteroids',
  template: `<h2>Near Earth Objects</h2>
             <table mat-table [dataSource]="asteroids">
                <ng-container matColumnDef="nameColumn">
                  <th mat-header-cell *matHeaderCellDef> Name </th>
                  <td mat-cell *matCellDef="let asteroid"> {{asteroid.name}} </td>
                </ng-container>
                <ng-container matColumnDef="diameterColumn">
                  <th mat-header-cell *matHeaderCellDef> Maximum Diameter (km) </th>
                  <td mat-cell *matCellDef="let asteroid"> {{asteroid.estimated_diameter.kilometers.estimated_diameter_max}} </td>
                </ng-container>
                <ng-container matColumnDef="firstColumn">
                  <th mat-header-cell *matHeaderCellDef> First Observation </th>
                  <td mat-cell *matCellDef="let asteroid"> {{asteroid.orbital_data.first_observation_date}} </td>
                </ng-container>
                <ng-container matColumnDef="lastColumn">
                  <th mat-header-cell *matHeaderCellDef> Last Observation </th>
                  <td mat-cell *matCellDef="let asteroid"> {{asteroid.orbital_data.last_observation_date}} </td>
                </ng-container>
                <ng-container matColumnDef="orbitColumn">
                  <th mat-header-cell *matHeaderCellDef> Orbiting Body </th>
                  <td mat-cell *matCellDef="let asteroid">
                    <span *ngIf="asteroid.close_approach_data[0]">{{asteroid.close_approach_data[0].orbiting_body}}</span>
                  </td>
                </ng-container>
                <ng-container matColumnDef="closeColumn">
                  <th mat-header-cell *matHeaderCellDef> Close Approach </th>
                  <td mat-cell *matCellDef="let asteroid">
                    <span *ngIf="asteroid.close_approach_data[0]">{{asteroid.close_approach_data[0].close_approach_date}}</span>
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
export class AsteroidsComponent implements OnInit {

  asteroidsService : AsteroidsService;
  asteroids = [];
  displayedColumns = ['nameColumn', 'diameterColumn', 'firstColumn', 'lastColumn', 'orbitColumn', 'closeColumn', 'hazardColumn']

  constructor(asteroidsService : AsteroidsService) {
    this.asteroidsService = asteroidsService
  }

  ngOnInit() : void {
    this.asteroidsService.fetchAsteroids((result) => {
      this.asteroids = result
  })
  }

}
