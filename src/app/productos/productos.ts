import { Component, Input } from '@angular/core';
import { Producto } from './producto.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos {
  @Input() producto!: Producto;
  @Input() llave!: string;
  descripcion: any;
  constructor( private router: Router){};
  editarProducto(){
    //pasamos la llave para leer dentro del diccionario
    this.router.navigate(['/editar', this.llave]);
  }
}
