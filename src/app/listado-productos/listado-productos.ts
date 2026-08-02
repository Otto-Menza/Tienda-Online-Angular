import { Component } from '@angular/core';
import { producerUpdatesAllowed } from '@angular/core/primitives/signals';
import { Productos } from '../productos/productos';
import { Producto } from '../productos/producto.model';
import { FormsModule } from '@angular/forms';
import { Formulario } from "../formulario/formulario";
import { ProductoService } from '../producto';
import { Router } from '@angular/router';




@Component({
  selector: 'app-listado-productos',
  imports: [FormsModule, Formulario, Productos],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.css'
})
export class ListadoProductos {

  productos: {[llave:string]: Producto} ={};

  constructor(private productoService: ProductoService,
    private router: Router
  ){}
  
  ngOnInit(){
    this.cargarProductos();
  }

  cargarProductos(){
    this.productoService.listarProductos().subscribe((productos: {[llave:string]: Producto} ={}) => {
      this.productos = productos;
    })
  }

  obtenerLlaves(): string[]{
    if(this.productos){
      return Object.keys(this.productos);
    }
    return [];
  }

  agregarProducto(){
    this.router.navigate(['agregar']);
  }
}
