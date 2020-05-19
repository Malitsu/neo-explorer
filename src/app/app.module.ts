import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { AsteroidsModule } from './asteroids/asteroids.module'
import { NotFoundComponent } from './not-found/not-found.component'
import { InfoComponent } from './info/info.component'

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, AsteroidsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
