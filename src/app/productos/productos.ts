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
  descripcion: any;
  constructor( private router: Router){};
  editarProducto(id: number){
    this.router.navigate(['/editar', id]);
  }
}
