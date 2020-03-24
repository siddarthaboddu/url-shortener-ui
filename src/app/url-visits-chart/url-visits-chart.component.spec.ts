import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlVisitsChartComponent } from './url-visits-chart.component';

describe('UrlVisitsChartComponent', () => {
  let component: UrlVisitsChartComponent;
  let fixture: ComponentFixture<UrlVisitsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlVisitsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlVisitsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
