import { Component, OnInit } from '@angular/core';

import { LaunchpadtoggleService } from './../portal-navbar-launchpadtoggle.service';

@Component({
  selector: 'app-applauncher',
  templateUrl: './portal-navbar-applauncher.component.html',
  styleUrls: ['./portal-navbar-applauncher.component.scss']
})
export class ApplauncherComponent implements OnInit {

  constructor(private launchPadToggle: LaunchpadtoggleService) {

  }

  toggleLaunchPad() {
    this.launchPadToggle.toggleAppLauncherState();
  }

  ngOnInit() {
  }

}
