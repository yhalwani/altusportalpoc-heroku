import { TranslateService } from './translate.service'
import {Subscription} from 'rxjs/Subscription';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  subscription: Subscription;
  contact = 'Contact';
  language = 'English';
  title = 'app';

  constructor(private translate: TranslateService) {
    this.subscription = this.translate.laugageState$.subscribe(
      language => {
        if (language == true) {
          this.language = 'English';
          this.contact = 'Nous Joindre';
        } else {
          this.language = 'Français';
          this.contact = 'Contact';
        }
      }
    )
  }

  changeLang() {
    this.translate.toggleLanguageState();
  }

}
