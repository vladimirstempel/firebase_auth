import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Credentials } from '@interfaces/credentials.interface';
import { Router } from '@angular/router';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth, private router: Router) {}

  isSignedIn(): Observable<boolean> {
    return this.fireAuth.authState
      .pipe(
        map(user => !!user)
      );
  }

  signIn({email, password}: Credentials): Promise<any> {
    return this.fireAuth
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        if (user) this.router.navigate(['/dashboard']);
        return user;
      })
  }

  signUp(credentials: Credentials): Promise<any> {
    return this.fireAuth
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(result => {
        if (result) {
          if ('firstName' in credentials || 'lastName' in credentials) {
            result.user.updateProfile({
              displayName: `${credentials.firstName} ${credentials.lastName}`.trim()
            })
          }
          this.router.navigate(['/dashboard']);
        }
        return result;
      })
  }

  signOut(): Promise<any> {
    return this.fireAuth
      .signOut();
  }

  getUser(): Observable<User> {
    return this.fireAuth.user;
  }
}
