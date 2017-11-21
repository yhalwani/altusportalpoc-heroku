import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalNavUserprofileComponent } from './portal-nav-userprofile.component';

describe('PortalNavUserprofileComponent', () => {
  let component: PortalNavUserprofileComponent;
  let fixture: ComponentFixture<PortalNavUserprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalNavUserprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalNavUserprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
