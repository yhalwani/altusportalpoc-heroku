import { TranslateService } from './translate.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PortalNavbarComponent } from './portal-navbar/portal-navbar.component';
import { PortalNavUserprofileComponent } from './portal-nav-userprofile/portal-nav-userprofile.component';
import { UsernotificationComponent } from './portal-nav-userprofile/portal-nav-usernotification/portal-nav-usernotification.component';
import { ApplauncherComponent } from './portal-navbar/portal-navbar-applauncher/portal-navbar-applauncher.component';
import { UsericonComponent } from './portal-nav-userprofile/portal-nav-usericon/portal-nav-usericon.component';
import { ApplaunchpadComponent } from './portal-navbar/portal-navbar-applaunchpad/portal-navbar-applaunchpad.component';

import { LaunchpadtoggleService } from './portal-navbar/portal-navbar-launchpadtoggle.service';
import { UserprofileCallbackService } from './portal-nav-userprofile/portal-nav-userprofile-callback.service';
import { SafePipe } from './portal-nav-userprofile/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PortalNavbarComponent,
    PortalNavUserprofileComponent,
    UsernotificationComponent,
    ApplauncherComponent,
    UsericonComponent,
    ApplaunchpadComponent,
    SafePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LaunchpadtoggleService,
    TranslateService,
    UserprofileCallbackService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
