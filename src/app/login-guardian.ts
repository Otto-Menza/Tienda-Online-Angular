import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginServices } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardianService implements CanActivate {
  constructor(
    private loginService: LoginServices,
    private router: Router
  ){}
  
  //Verificar si el usuario esta autenticado antes de activar la ruta:
  canActivate(): boolean{
    if(this.loginService.isAutenticado()){
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }
  }
}
