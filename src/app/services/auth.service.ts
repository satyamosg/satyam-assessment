import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private presentsDB: AngularFirestore, public aFAuth: AngularFireAuth, private router: Router) { }

  registerUser(email, password) {
    return this.aFAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this.aFAuth.auth.signInWithEmailAndPassword(email, password)
    .catch((error: Error) => {
      console.error(error);
      throw error;
    });
  }

  get user() {
    return this.aFAuth.auth.currentUser
  }

  logOut() {
    this.aFAuth.auth.signOut().then(() => {
      this.router.navigate(['login']);
    }).catch((error) => {
      console.error(error);
      throw error;
    });
  }
}
