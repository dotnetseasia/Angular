import { TestBed } from '@angular/core/testing';

import { PropertySetupService } from './property-setup.service';

describe('PropertySetupService', () => {
  let service: PropertySetupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertySetupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
