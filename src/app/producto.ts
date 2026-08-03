import { EventEmitter, Injectable } from '@angular/core';
import { Producto } from './productos/producto.model';
import { DatosService } from './datos';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
  productos: {[llave:string]: Producto} ={};
  //Observable para actualizar cambios
  productosActualizados = new Subject<{[llave:string]: Producto}>();

  constructor(private datosService: DatosService){};

  listarProductos(){
    return this.datosService.listarProductos();
  }

  //gregar o modificar un producto
  guardarProducto(producto: Producto, llave: string | null = null) {
    if(llave === null){
      //caso guardar producto
      this.datosService.guardarProducto(producto).subscribe(() =>{
        this.refrescarProductos();
      });
    }
  }

  private refrescarProductos(){
    this.listarProductos().subscribe((productos: {[llave:string]: Producto}) =>{
      this.setProductos(productos);
    });
  };

  setProductos(productos: {[llave:string]: Producto}){
    this.productos = productos;
    this.productosActualizados.next(this.productos);//emitir la actualziacion de la lista
  }
  getProductoByLlave(llave: string): Producto | undefined{
    return undefined;
    //return this.productos.find(producto => producto.id === id );
  }

  eliminarProducto(id: number){
 /*    const indice = this.productos.findIndex(p => p.id === id);
    if(indice !== -1){
      this.productos.splice(indice, 1);
    } */
  }

}
