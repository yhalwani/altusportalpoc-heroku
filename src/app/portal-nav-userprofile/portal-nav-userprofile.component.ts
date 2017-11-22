import { identity } from 'rxjs/util/identity';
import { Component, OnInit } from '@angular/core';
import { UserprofileCallbackService } from './portal-nav-userprofile-callback.service';

@Component({
  selector: 'app-portal-nav-userprofile',
  templateUrl: './portal-nav-userprofile.component.html',
  styleUrls: ['./portal-nav-userprofile.component.scss']
})
export class PortalNavUserprofileComponent implements OnInit {

  authenticated: boolean;

  constructor(private callbackHandler: UserprofileCallbackService) {
    this.callbackHandler = new UserprofileCallbackService();
    this.authenticated = false;
  }

  onLogin(identity) {
    console.log('Authenticated!');
    this.authenticated = !this.authenticated;
    this.callbackHandler.setUser(identity);
  }

  ngOnInit() {
  }

}
