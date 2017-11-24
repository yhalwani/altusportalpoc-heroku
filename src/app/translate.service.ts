import { Injectable } from '@angular/core';
 import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TranslateService {

  private languages = new Set<String>();
  public readonly languageState$ = new BehaviorSubject<String>('English');

  constructor() {
    this.languages.add('English');
    this.languages.add('Français');
    this.languages.add('Deutsche');
  }

  toggleLanguageState(language: String) {
    this.languageState$.next(language);
  }

  getLanguages(): Set<String> {
    return this.languages;
  }

  // toggleLanguageState() {
  //   this.laugageState$._isScalar = !this.laugageState$._isScalar;
  //   this.language.next(this.laugageState$._isScalar);
  // }

}
