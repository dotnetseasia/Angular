import { TestBed } from '@angular/core/testing';

import { MarketSourceService } from './market-source.service';

describe('MarketSourceService', () => {
  let service: MarketSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
