import { TestBed } from '@angular/core/testing';

import { CesDataService } from './ces-data.service';

describe('CesDataService', () => {
  let service: CesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
