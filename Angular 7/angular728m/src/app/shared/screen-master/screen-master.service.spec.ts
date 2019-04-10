import { TestBed } from '@angular/core/testing';

import { ScreenMasterService } from './screen-master.service';

describe('ScreenMasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScreenMasterService = TestBed.get(ScreenMasterService);
    expect(service).toBeTruthy();
  });
});
