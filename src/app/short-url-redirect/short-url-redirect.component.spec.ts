import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortUrlRedirectComponent } from './short-url-redirect.component';

describe('ShortUrlRedirectComponent', () => {
  let component: ShortUrlRedirectComponent;
  let fixture: ComponentFixture<ShortUrlRedirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortUrlRedirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortUrlRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
