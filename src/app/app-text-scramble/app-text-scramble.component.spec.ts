import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTextScrambleComponent } from './app-text-scramble.component';

describe('AppTextScrambleComponent', () => {
  let component: AppTextScrambleComponent;
  let fixture: ComponentFixture<AppTextScrambleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTextScrambleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTextScrambleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
