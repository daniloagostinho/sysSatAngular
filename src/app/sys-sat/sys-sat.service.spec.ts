import { TestBed, inject } from '@angular/core/testing';

import { SysSatService } from './sys-sat.service';

describe('SysSatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SysSatService]
    });
  });

  it('should be created', inject([SysSatService], (service: SysSatService) => {
    expect(service).toBeTruthy();
  }));
});
