import { TestBed } from '@angular/core/testing';

import { LoggedinServiceService } from './loggedin-service.service';

describe('LoggedinServiceService', () => {
  let service: LoggedinServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggedinServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
