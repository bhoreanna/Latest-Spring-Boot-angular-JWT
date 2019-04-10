import { TestBed } from '@angular/core/testing';

import { ShareDialogService } from './share-dialog.service';

describe('ShareDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShareDialogService = TestBed.get(ShareDialogService);
    expect(service).toBeTruthy();
  });
});
