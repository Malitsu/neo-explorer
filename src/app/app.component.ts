import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Near Earth Object Explorer</h1>
             <form>
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
             <app-asteroids [startingDate]="startingDate" [endingDate]="endingDate"></app-asteroids>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  startday : number
  startmonth : number
  startyear : number
  endday : number
  endmonth : number
  endyear : number
  hazardous : boolean = false
  startingDate : string = '2020-04-26'
  endingDate : string = '2020-05-03'

  findMatches() : void {
    this.startingDate = this.startyear +'-' +this.startmonth +'-' +this.startday
    this.endingDate = this.endyear +'-' +this.endmonth +'-' +this.endday
  }
  
}
