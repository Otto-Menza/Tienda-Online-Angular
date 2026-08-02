import { EventEmitter, Injectable } from '@angular/core';
import { Producto } from './productos/producto.model';
import { DatosService } from './datos';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
  productos: {[llave:string]: Producto} ={};

  constructor(private datosService: DatosService){};

  listarProductos(){
    return this.datosService.listarProductos();
  }

  //gregar o modificar un producto
  guardarProducto(producto: Producto) {
/*     if(producto.id === null){ //Caso: agregar
      producto.id = this.idSiguiente++;
      this.productos.push(producto);
    } else {// caso: ya existe prodiucto/ ya existe id
      const indice = this.productos.findIndex(p => p.id === producto.id);
      if(indice!= -1){
        this.productos[indice] = producto;
      }
    } */
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
