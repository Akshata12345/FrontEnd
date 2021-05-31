import { TestBed } from '@angular/core/testing';

import { CompApiService } from './comp-api.service';

describe('CompApiService', () => {
  let service: CompApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
