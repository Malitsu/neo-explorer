import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

@Injectable()
export class AsteroidsService {
  private url : string = 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY'
  private http: HttpClient
  constructor (http: HttpClient) {
    this.http = http
  }

  fetchAsteroids (callBackFunction: (result) => void): void {
    this.http.get<any>(this.url).subscribe(jsonObject => {
      callBackFunction(jsonObject.near_earth_objects)
    }, this.error)
  }

  error (err: HttpErrorResponse) {
    console.log(err)
  }
}
