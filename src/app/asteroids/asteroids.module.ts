import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { MatSortModule } from '@angular/material/sort'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { ChartsModule } from 'ng2-charts'

import { AsteroidsComponent } from './asteroids.component'
import { AsteroidDetailComponent } from './asteroid-detail.component'
import { AsteroidsRoutingModule } from './asteroids-routing.module'
import { AsteroidsService } from './asteroids.service'
import { AsteroidsFormComponent } from './asteroids-form.component'
import { SearchComponent } from './search.component'
import { AsteroidChartComponent } from './asteroid-chart/asteroid-chart.component'

@NgModule({
  declarations: [
    AsteroidsComponent, AsteroidDetailComponent, AsteroidsFormComponent, SearchComponent, AsteroidChartComponent
  ],
  exports: [
    AsteroidsFormComponent, AsteroidsRoutingModule
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AsteroidsRoutingModule,
    MatSortModule,
    BrowserAnimationsModule,
    FormsModule,
    ChartsModule
  ],
  providers: [AsteroidsService]
})

export class AsteroidsModule {}