import { TestBed } from '@angular/core/testing';

import { AnthServiceService } from './anth-service.service';

describe('AnthServiceService', () => {
  let service: AnthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
