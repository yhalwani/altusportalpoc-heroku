import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LaunchpadtoggleService {

  private appLauncherStateSource = new BehaviorSubject<boolean>(false);

  appLauncherState$ = this.appLauncherStateSource.asObservable();

  toggleAppLauncherState() {
    this.appLauncherState$._isScalar = !this.appLauncherState$._isScalar;
    this.appLauncherStateSource.next(this.appLauncherState$._isScalar);
  }

}
