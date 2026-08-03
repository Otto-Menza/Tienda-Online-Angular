import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './productos/producto.model';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  url = 'https://tienda-online-angular-3b971-default-rtdb.firebaseio.com/';

  constructor(private httpClient: HttpClient){}

  listarProductos(): Observable<{[llave:string]: Producto}>{
    return this.httpClient.get<{[llave:string]: Producto}>(this.url + 'datos.json');
  }

  agregarProducto(producto: Producto): Observable<any>{
    //aqui se genera el valor de la llave de forma autpmatica
    return this.httpClient.post(`${this.url}datos.json`, producto);
  }

  modificarProducto(producto: Producto, llave: string): Observable<any>{
    const url_modificada = `${this.url}datos/${llave}.json`;
    return this.httpClient.put(url_modificada, producto);
  }
}
