import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ListadoProductos } from "./listado-productos/listado-productos";
import { Mensaje } from './mensaje';
import { ListadoUsuarios } from "./listado-usuarios/listado-usuarios";
import { Productos } from "./productos/productos";
import { LoginServices } from './login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListadoProductos, ListadoUsuarios, Productos, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Tienda Online');
  

  constructor(private loginServices: LoginServices){}

  isAutenticado() {
    return this.loginServices.isAutenticado();
  }
  salir() {
    this.loginServices.logout();
  }
  
}
