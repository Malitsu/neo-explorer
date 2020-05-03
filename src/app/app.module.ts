import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component'

import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'

import { AsteroidsComponent } from './asteroids/asteroids.component'
import { AsteroidsService } from './asteroids/asteroids.service'

@NgModule({
  declarations: [
    AppComponent,
    AsteroidsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule,
    MatTableModule
  ],
  providers: [AsteroidsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
