import { TestBed } from '@angular/core/testing';

import { AllbusinessService } from './allbusiness.service';

describe('AllbusinessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllbusinessService = TestBed.get(AllbusinessService);
    expect(service).toBeTruthy();
  });
});
