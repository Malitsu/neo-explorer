import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { MatSortModule } from '@angular/material/sort'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'

import { AsteroidsComponent } from './asteroids.component'
import { AsteroidDetailComponent } from './asteroid-detail.component'
import { AsteroidsRoutingModule } from './asteroids-routing.module'
import { AsteroidsService } from './asteroids.service'
import { AsteroidsFormComponent } from './asteroids-form.component'

@NgModule({
  declarations: [
    AsteroidsComponent, AsteroidDetailComponent, AsteroidsFormComponent
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
    FormsModule
  ],
  providers: [AsteroidsService]
})

export class AsteroidsModule {}