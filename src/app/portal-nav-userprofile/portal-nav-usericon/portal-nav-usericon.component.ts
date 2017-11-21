import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usericon',
  templateUrl: './portal-nav-usericon.component.html',
  styleUrls: ['./portal-nav-usericon.component.scss']
})
export class UsericonComponent implements OnInit {

  avatar: any;

  constructor() {
    this.avatar = '././assets/profilePic.jpg';
  }

  ngOnInit() {
  }

}
