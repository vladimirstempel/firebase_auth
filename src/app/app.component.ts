import { Component } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Firebase Auth';
  authorized: boolean;
  subscription: Subscription;

  constructor(public authService: AuthService, private router: Router) {

    this.subscription = this.authService.isSignedIn()
      .subscribe((authorized) => this.authorized = authorized)
  }

  get isSignedIn() {
    return this.authorized;
  }

  signOut() {
    this.authService.signOut()
      .then(() => {
        this.router.navigate(['/auth']);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
