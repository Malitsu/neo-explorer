import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

@Injectable()
export class AsteroidsService {
  private asteroidsUrl : string = 'https://api.nasa.gov/neo/rest/v1/feed?start_date='
  private asteroidUrl : string = 'https://api.nasa.gov/neo/rest/v1/neo/'
  private apiKey : string = 'api_key=qpW7V3khcNm6Ms1PAbg1Hue276UQmLjppplVLdCp'
  private http : HttpClient

  constructor (http: HttpClient) {
    this.http = http
  }

  fetchAsteroids (startingDate : string, endingDate : string, callBackFunction: (result) => void): void {
    this.http.get<any>(this.asteroidsUrl +startingDate +'&end_date=' +endingDate +'&'+this.apiKey).subscribe(jsonObject => {
      let answer = []
      for (let key in jsonObject.near_earth_objects) {
        for (let value in jsonObject.near_earth_objects[key]) {
          answer.push(jsonObject.near_earth_objects[key][value])
        }
      }
      callBackFunction(answer)
    }, this.error)
  }

  fetchAsteroid (id : number, callBackFunction : (result) => void) : void {
    this.http.get<any>(this.asteroidUrl +id +'?' +this.apiKey).subscribe(jsonObject => {
      callBackFunction(jsonObject)
    }, this.error)
  }

  error (err: HttpErrorResponse) {
    console.log(err)
  }
}
