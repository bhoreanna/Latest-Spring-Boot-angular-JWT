import { TestBed } from '@angular/core/testing';

import { ScreenModuleService } from './screen-module.service';

describe('ScreenModuleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScreenModuleService = TestBed.get(ScreenModuleService);
    expect(service).toBeTruthy();
  });
});
