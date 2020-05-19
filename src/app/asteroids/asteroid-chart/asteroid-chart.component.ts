import { Component, OnInit, OnChanges, Input } from '@angular/core'
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js'

@Component({
  selector: 'app-asteroid-chart',
  templateUrl: './asteroid-chart.component.html',
  styleUrls: ['./asteroid-chart.component.css']
})
export class AsteroidChartComponent implements OnInit, OnChanges {

  @Input() asteroids = []

  public scatterChartOptions: ChartOptions = {
    responsive: true,
  };

  public scatterChartData: ChartDataSets[] = [
    {
      data: [
        { x: 1, y: 1 },
        { x: 2, y: 3 },
        { x: 3, y: -2 },
        { x: 4, y: 4 },
        { x: 5, y: -3 },
      ],
      label: 'NEOs',
      pointRadius: 10,
    },
  ];
  public scatterChartType: ChartType = 'scatter';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.scatterChartData[0].data = this.asteroids.filter(asteroid => asteroid.close_approach_data[0] !== undefined)
                                                  .map(asteroid => this.distill(asteroid))
  }

  distill(asteroid) {
    return {x: asteroid.estimated_diameter.kilometers.estimated_diameter_max, y: asteroid.close_approach_data[0].miss_distance.kilometers}
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
