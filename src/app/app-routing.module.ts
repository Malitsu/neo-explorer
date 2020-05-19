import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { NotFoundComponent } from './not-found/not-found.component'
import { InfoComponent } from './info/info.component'

const appRoutes : Routes =[
  { path: '', redirectTo: '/asteroids', pathMatch: 'full' },
  { path: 'info', component: InfoComponent },
//  { path: '**', component: NotFoundComponent }
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