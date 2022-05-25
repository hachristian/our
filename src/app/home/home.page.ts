import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  myCustomIcon = '';

  constructor() {}

  makeIcon() {
    this.myCustomIcon = '/our/resources/uark-icon.svg';
  }

}
