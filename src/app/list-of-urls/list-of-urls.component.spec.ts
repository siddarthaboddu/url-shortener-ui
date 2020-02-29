import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfUrlsComponent } from './list-of-urls.component';

describe('ListOfUrlsComponent', () => {
  let component: ListOfUrlsComponent;
  let fixture: ComponentFixture<ListOfUrlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfUrlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfUrlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
