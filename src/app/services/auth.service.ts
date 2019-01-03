import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private presentsDB: AngularFirestore, public aFAuth: AngularFireAuth, private router: Router) { }
 
  get isLoggedIn(): boolean {
    return (this.user) ? true: false;
  }

  get user() {
    return this.aFAuth.auth.currentUser
  }

  registerUser(email, password) {
    return this.aFAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logOut() {
    this.aFAuth.auth.signOut().then(() => {
      this.router.navigate(['register']);
    }).catch((error) => {
      console.error(error);
      throw error;
    })
  }
}