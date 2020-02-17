import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPricingComponent } from './app-pricing.component';

describe('AppPricingComponent', () => {
  let component: AppPricingComponent;
  let fixture: ComponentFixture<AppPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
