import { TestBed } from '@angular/core/testing';

import { DatatruckService } from './datatruck.service';

describe('DatatruckService', () => {
  let service: DatatruckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatatruckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
