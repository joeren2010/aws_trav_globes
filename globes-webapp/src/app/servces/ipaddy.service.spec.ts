import { TestBed } from '@angular/core/testing';

import { IpaddyService } from './ipaddy.service';

describe('IpaddyService', () => {
  let service: IpaddyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpaddyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
