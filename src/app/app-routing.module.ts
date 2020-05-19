import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { NotFoundComponent } from './not-found/not-found.component'
import { InfoComponent } from './info/info.component'
import { AsteroidsFormComponent } from './asteroids/asteroids-form.component'
import { AsteroidDetailComponent } from './asteroids/asteroid-detail.component'

const appRoutes : Routes =[
  { path: '', redirectTo: '/asteroids', pathMatch: 'full' },
  { path: 'asteroids', component: AsteroidsFormComponent },
  { path: 'info', component: InfoComponent },
  { path: 'asteroids/:id', component: AsteroidDetailComponent },
  { path: '**', component: NotFoundComponent }
  
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }