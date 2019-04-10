import { TestBed } from '@angular/core/testing';

import { ShareNotificationService } from './share-notification.service';

describe('ShareNotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShareNotificationService = TestBed.get(ShareNotificationService);
    expect(service).toBeTruthy();
  });
});
