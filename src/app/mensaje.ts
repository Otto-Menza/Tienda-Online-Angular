import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Mensaje {
  private mensaje: string = 'Hola desde el servicios de mensaje';
  obtenerMensaje(): string{
    return this.mensaje;
  }
  
}
