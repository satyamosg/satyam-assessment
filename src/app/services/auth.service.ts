import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private presentsDB: AngularFirestore, public aFAuth: AngularFireAuth) { }

  registerUser(email, password) {
    return this.aFAuth.auth.createUserWithEmailAndPassword(email, password);
  }

}
