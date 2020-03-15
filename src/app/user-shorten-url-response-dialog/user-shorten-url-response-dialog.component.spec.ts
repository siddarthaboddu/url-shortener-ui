import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserShortenUrlResponseDialogComponent } from './user-shorten-url-response-dialog.component';

describe('UserShortenUrlResponseDialogComponent', () => {
  let component: UserShortenUrlResponseDialogComponent;
  let fixture: ComponentFixture<UserShortenUrlResponseDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserShortenUrlResponseDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserShortenUrlResponseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
