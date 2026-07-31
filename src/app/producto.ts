import { EventEmitter, Injectable } from '@angular/core';
import { Producto } from './productos/producto.model';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  //variable para el ID sigueinte y unico
  private idSiguiente = 1;

  productos: Producto[] = [];
  constructor(){
    //inicializar los productos:
    const producto1 = new Producto(this.idSiguiente++, 'Pantalon', 130);
    const producto2 = new Producto(this.idSiguiente++, 'Camisa', 80);
    const producto3 = new Producto(this.idSiguiente++, 'Playera', 50)

    //agregarlos al arreglo de productos
    this.productos.push(producto1, producto2, producto3);
  }

  //gregar o modificar un producto
  guardarProducto(producto: Producto) {
    if(producto.id === null){ //Caso: agregar
      producto.id = this.idSiguiente++;
      this.productos.push(producto);
    } else {// caso: ya existe prodiucto/ ya existe id
      const indice = this.productos.findIndex(p => p.id === producto.id);
      if(indice!= -1){
        this.productos[indice] = producto;
      }
    }
  }

  getProductoById(id:number): Producto | undefined{
    return this.productos.find(producto => producto.id === id );
  }

  eliminarProducto(id: number){
    const indice = this.productos.findIndex(p => p.id === id);
    if(indice !== -1){
      this.productos.splice(indice, 1);
    }
  }
}
