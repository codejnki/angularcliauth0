import { Component } from '@angular/core';

var Auth0Lock = require('auth0-lock').default;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  constructor() {
    var lock = new Auth0Lock('1234','1234');
    lock.show();
  }
}
