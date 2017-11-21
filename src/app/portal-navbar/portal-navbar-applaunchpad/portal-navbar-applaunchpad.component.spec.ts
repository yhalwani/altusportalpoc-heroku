import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalNavbarApplaunchpadComponent } from './portal-navbar-applaunchpad.component';

describe('PortalNavbarApplaunchpadComponent', () => {
  let component: PortalNavbarApplaunchpadComponent;
  let fixture: ComponentFixture<PortalNavbarApplaunchpadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalNavbarApplaunchpadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalNavbarApplaunchpadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
