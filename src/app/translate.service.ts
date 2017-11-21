import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TranslateService {

  private language = new BehaviorSubject<boolean>(false);

  laugageState$ = this.language.asObservable();

  constructor() { }

  toggleLanguageState() {
    this.laugageState$._isScalar = !this.laugageState$._isScalar;
    this.language.next(this.laugageState$._isScalar);
  }

}
