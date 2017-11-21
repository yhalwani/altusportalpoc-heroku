import { TestBed, inject } from '@angular/core/testing';

import { UserprofileCallbackService } from './portal-nav-userprofile-callback.service';

describe('UserprofileCallbackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserprofileCallbackService]
    });
  });

  it('should be created', inject([UserprofileCallbackService], (service: UserprofileCallbackService) => {
    expect(service).toBeTruthy();
  }));
});
