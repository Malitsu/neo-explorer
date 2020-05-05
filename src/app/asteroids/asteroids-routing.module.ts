import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AsteroidsComponent } from './asteroids.component'
import { AsteroidDetailComponent } from './asteroid-detail.component'

const mySubRoutes: Routes = [
  { path: 'asteroids', component: AsteroidsComponent },
  { path: 'asteroids/:id', component: AsteroidDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(mySubRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AsteroidsRoutingModule {}