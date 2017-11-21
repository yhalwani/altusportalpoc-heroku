import { Injectable } from '@angular/core';

@Injectable()
export class UserprofileCallbackService {

  private user: { photos: { thumbnail: any }, username: any };

  constructor() {
    this.user = { photos: { thumbnail: '' }, username: '' };
  }

  setUser(identity) {
    this.user = identity;
  }

  getUser() {
    return this.user;
  }

}
