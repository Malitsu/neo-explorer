import { Component } from '@angular/core'

@Component({
  selector: 'app-asteroids-form',
  template: `<form>
                <p>Retrieve NASA's list of asteroids based on their closest approach date to Earth. Please notice the maximum time interval can be only seven days.</p>
                <p> Starting date: 
                  <input [(ngModel)]="startday" placeholder="day" name="startday" />
                  <input [(ngModel)]="startmonth" placeholder="month" name="startmonth" />
                  <input [(ngModel)]="startyear" placeholder="year" name="startyear" />
                </p>
                <p> Ending date: 
                  <input [(ngModel)]="endday" placeholder="day" name="endday" />
                  <input [(ngModel)]="endmonth" placeholder="month" name="endmonth" />
                  <input [(ngModel)]="endyear" placeholder="year" name="endyear" />
                </p>
                <p> Potentially hazardous: 
                  <input type="checkbox"  [(ngModel)]="hazardous" name="hazardous"/>
                </p>
              </form>
              <button (click)="findMatches()">Find matches</button>
              <app-asteroids [startingDate]="startingDate" [endingDate]="endingDate" [hazardous]="hazardous">
              </app-asteroids>`,
styles: []
})
export class AsteroidsFormComponent {

  startday : number
  startmonth : number
  startyear : number
  endday : number
  endmonth : number
  endyear : number
  hazardous : boolean = false
  startingDate : string
  endingDate : string

  findMatches() : void {
    this.startingDate = this.startyear +'-' +this.startmonth +'-' +this.startday
    this.endingDate = this.endyear +'-' +this.endmonth +'-' +this.endday
  }
}