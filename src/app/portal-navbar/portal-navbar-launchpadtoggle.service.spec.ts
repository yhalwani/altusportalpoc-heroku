import { TestBed, inject } from '@angular/core/testing';

import { PortalNavbarLaunchpadtoggleService } from './portal-navbar-launchpadtoggle.service';

describe('PortalNavbarLaunchpadtoggleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortalNavbarLaunchpadtoggleService]
    });
  });

  it('should be created', inject([PortalNavbarLaunchpadtoggleService], (service: PortalNavbarLaunchpadtoggleService) => {
    expect(service).toBeTruthy();
  }));
});
