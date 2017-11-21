import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalNavApplauncherComponent } from './portal-nav-applauncher.component';

describe('PortalNavApplauncherComponent', () => {
  let component: PortalNavApplauncherComponent;
  let fixture: ComponentFixture<PortalNavApplauncherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalNavApplauncherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalNavApplauncherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
