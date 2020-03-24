import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlRefererChartComponent } from './url-referer-chart.component';

describe('UrlRefererChartComponent', () => {
  let component: UrlRefererChartComponent;
  let fixture: ComponentFixture<UrlRefererChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlRefererChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlRefererChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
