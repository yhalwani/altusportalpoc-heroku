import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import { LaunchpadtoggleService } from './../portal-navbar-launchpadtoggle.service';

@Component({
  selector: 'app-applaunchpad',
  templateUrl: './portal-navbar-applaunchpad.component.html',
  styleUrls: ['./portal-navbar-applaunchpad.component.scss']
})
export class ApplaunchpadComponent implements OnInit {

  apps = [
    {name: 'TAP',             code: 'TAP'},
    {name: 'RealNet',         code: 'RN'},
    {name: 'InSite',          code: 'IS'},
    {name: 'ARGUS Voyanta',   code: 'Voy'},
    {name: 'ARGUS on Demand', code: 'AoD'},
    {name: 'ARGUS Apex',      code: 'Apx'}
  ]

  visible: boolean;
  subscription: Subscription;

  constructor(toggleLaunchPad: LaunchpadtoggleService) {
    this.subscription = toggleLaunchPad.appLauncherState$.subscribe(
      visible => {
        this.visible = visible;
      }
    )
  }

  ngOnInit() {
  }

}
