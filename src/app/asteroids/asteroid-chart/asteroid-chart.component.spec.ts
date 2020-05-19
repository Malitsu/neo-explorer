import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsteroidChartComponent } from './asteroid-chart.component';

describe('AsteroidChartComponent', () => {
  let component: AsteroidChartComponent;
  let fixture: ComponentFixture<AsteroidChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsteroidChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsteroidChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
