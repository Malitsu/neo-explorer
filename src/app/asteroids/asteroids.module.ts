import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { MatTableModule } from '@angular/material/table'

import { AsteroidsComponent } from './asteroids.component'
import { AsteroidDetailComponent } from './asteroid-detail.component'
import { AsteroidsRoutingModule } from './asteroids-routing.module'
import { AsteroidsService } from './asteroids.service'

@NgModule({
  declarations: [
    AsteroidsComponent, AsteroidDetailComponent
  ],
  exports: [
    AsteroidsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AsteroidsRoutingModule,
    MatTableModule
  ],
  providers: [AsteroidsService]
})

export class AsteroidsModule {}