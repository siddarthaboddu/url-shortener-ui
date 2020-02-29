import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVisitsChartComponent } from './all-visits-chart.component';

describe('AllVisitsChartComponent', () => {
  let component: AllVisitsChartComponent;
  let fixture: ComponentFixture<AllVisitsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllVisitsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllVisitsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
