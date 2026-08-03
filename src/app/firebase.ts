import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firebaseConfig = {
    apiKey: "AIzaSyCTJK9lIugRhrLFx5PaAgUhz5toyP8jtlc",
    authDomain: "tienda-online-angular-3b971.firebaseapp.com",
    databaseURL: "https://tienda-online-angular-3b971-default-rtdb.firebaseio.com",
    projectId: "tienda-online-angular-3b971",
    storageBucket: "tienda-online-angular-3b971.firebasestorage.app",
    messagingSenderId: "805910746620",
    appId: "1:805910746620:web:b9ad874f8ebb5dae2f0e79"
  };

  public auth: Auth;
  public firebase: Firestore;

  constructor(){
    const app = initializeApp(this.firebaseConfig);
    this.auth = getAuth(app);
    this.firebase = getFirestore(app);
  }
}
