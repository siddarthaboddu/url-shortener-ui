import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWorldChartsComponent } from './all-world-charts.component';

describe('AllWorldChartsComponent', () => {
  let component: AllWorldChartsComponent;
  let fixture: ComponentFixture<AllWorldChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllWorldChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllWorldChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
