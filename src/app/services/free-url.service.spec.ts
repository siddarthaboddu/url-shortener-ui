import { TestBed } from '@angular/core/testing';

import { FreeUrlService } from './free-url.service';

describe('FreeUrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FreeUrlService = TestBed.get(FreeUrlService);
    expect(service).toBeTruthy();
  });
});
