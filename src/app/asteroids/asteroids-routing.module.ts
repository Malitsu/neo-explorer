import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AsteroidsFormComponent } from './asteroids-form.component'
import { AsteroidDetailComponent } from './asteroid-detail.component'
import { SearchComponent } from './search.component'

const mySubRoutes: Routes = [
  { path: 'asteroids', component: AsteroidsFormComponent },
  { path: 'search', component: SearchComponent },
  { path: 'asteroids/:id', component: AsteroidDetailComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(mySubRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AsteroidsRoutingModule {}