import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserShortenUrlDialogComponent } from './user-shorten-url-dialog.component';

describe('UserShortenUrlDialogComponent', () => {
  let component: UserShortenUrlDialogComponent;
  let fixture: ComponentFixture<UserShortenUrlDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserShortenUrlDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserShortenUrlDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
