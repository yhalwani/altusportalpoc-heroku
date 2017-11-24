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
  language: String = 'English';
  languages: Set<String>;
  title = 'app';

  constructor(private translate: TranslateService) {
    this.languages = this.translate.getLanguages();
    this.subscription = this.translate.languageState$.subscribe(
      language => {
        this.language = language;
        this.languages = this.translate.getLanguages();
        // this.languages.delete(language);
        if (language == 'English') {
          this.contact = 'Contact';
        } else if (language == 'Français') {
          this.contact = 'Nous Joindre';
        } else if (language == 'Deutsche') {
          this.contact = 'Kontakt';
        }
      }
    )
  }

  changeLang(lang) {
    this.translate.toggleLanguageState(lang);
  }

}
