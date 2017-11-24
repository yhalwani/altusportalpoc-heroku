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
    this.subscription = this.translate.languageState$.subscribe(
      language => {
        if (language == 'Français') {
          this.today = 'Aujourd\'hui';
          this.news = 'Nouvelles';
          this.events = 'Événements';
          this.logo = 'http://www.altusgroup.com/wp-content/themes/altus/images/altus_logo_fr.svg';
        } else if (language == 'Deutsche') {
          this.today = 'Heute';
          this.news = 'Nachrichten';
          this.events = 'Veranstaltungen';
          this.logo = 'http://www.altusgroup.com/wp-content/themes/altus/images/altus_logo.svg';
        } else {
          this.today = 'Today';
          this.news = 'News';
          this.events = 'Events';
          this.logo = 'http://www.altusgroup.com/wp-content/themes/altus/images/altus_logo.svg';
        }
      }
    )
  }

  ngOnInit() {
  }

}
