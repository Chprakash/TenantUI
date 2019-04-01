import { TestBed } from '@angular/core/testing';

import { BusinessPublishService } from './business-publish.service';

describe('BusinessPublishService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusinessPublishService = TestBed.get(BusinessPublishService);
    expect(service).toBeTruthy();
  });
});
