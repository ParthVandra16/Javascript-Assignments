import { TestBed } from '@angular/core/testing';

import { CkplayerserviceService } from './ckplayerservice.service';

describe('CkplayerserviceService', () => {
  let service: CkplayerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CkplayerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
