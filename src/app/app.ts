import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoProductos } from "./listado-productos/listado-productos";
import { Mensaje } from './mensaje';
import { ListadoUsuarios } from "./listado-usuarios/listado-usuarios";
import { Productos } from "./productos/productos";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListadoProductos, ListadoUsuarios, Productos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Servicios y Observables en Angular');
  mensaje: string;

  constructor(mensajeService: Mensaje){
    this.mensaje = mensajeService.obtenerMensaje();
  }
}
