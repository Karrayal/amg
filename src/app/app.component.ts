import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

import 'firebase/firestore';

@Component({
   selector: 'app-root',
  templateUrl: `./app.component.html`,
})
export class AppComponent {
  constructor(public authService: AuthService) {
  }
  login() {
    // this.authService.login(email, passworsd);
  }
  logout() {
    this.authService.logout();
  }
}


