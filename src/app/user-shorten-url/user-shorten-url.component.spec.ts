import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserShortenUrlComponent } from './user-shorten-url.component';

describe('UserShortenUrlComponent', () => {
  let component: UserShortenUrlComponent;
  let fixture: ComponentFixture<UserShortenUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserShortenUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserShortenUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
