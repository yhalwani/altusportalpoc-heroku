import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalNavUsericonComponent } from './portal-nav-usericon.component';

describe('PortalNavUsericonComponent', () => {
  let component: PortalNavUsericonComponent;
  let fixture: ComponentFixture<PortalNavUsericonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalNavUsericonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalNavUsericonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
