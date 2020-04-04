import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldChartsComponent } from './world-charts.component';

describe('WorldChartsComponent', () => {
  let component: WorldChartsComponent;
  let fixture: ComponentFixture<WorldChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
