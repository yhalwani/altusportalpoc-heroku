import { TranslateService } from './../translate.service';
import {Subscription} from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal-navbar',
  templateUrl: './portal-navbar.component.html',
  styleUrls: ['./portal-navbar.component.scss']
})
export class PortalNavbarComponent implements OnInit {

  logo: any;
  subscription: Subscription;
  today = 'Today';
  news = 'News';
  events = 'Events';

  constructor(private translate: TranslateService) {
    this.logo = 'http://www.altusgroup.com/wp-content/themes/altus/images/altus_logo.svg';
    this.subscription = this.translate.laugageState$.subscribe(
      language => {
        if (language == false) {
          this.today = 'Today';
          this.news = 'News';
          this.events = 'Events';
        } else {
          this.today = 'Aujourd\'hui';
          this.news = 'Nouvelles';
          this.events = 'Événements';
        }
      }
    )
  }

  ngOnInit() {
  }

  changeLogo(locale_id) {
    if ( locale_id === 'FR') {
      this.logo = 'http://www.altusgroup.com/wp-content/themes/altus/images/altus_logo_fr.svg';
    } else {
      this.logo = 'http://www.altusgroup.com/wp-content/themes/altus/images/altus_logo.svg';
    }
  }

}
