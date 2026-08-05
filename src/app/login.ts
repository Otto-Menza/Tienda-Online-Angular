import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from './firebase';
import { getIdToken, signInWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginServices {
  token: string | null = null;

  constructor(
    private router: Router,
    private firebaseService: FirebaseService
  ){}

  login(email: string, password: string){
    const auth = this.firebaseService.auth;

    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      auth.currentUser?.getIdToken().then((token) => {
        this.token = token;
        this.router.navigate(['/']);
      })
    })
    .catch((error) => {
      console.log('Error al iniciar sesión :', error)
    });
  }

  getIdToken(){
    return this.token;
  }

  //Metodo verificar login/autenticado
  isAutenticado(){
    return this.token != null;
  }
  //metodo para cerrar sesión
  logout(){
    const auth = this.firebaseService.auth;
    auth.signOut().then(() => {
      this.token = null; //Resetear el token al cerrar secion
      this.router.navigate(['login']);
    }).catch((error) => console.error('Error al hacer logout:', error));
  }
}
