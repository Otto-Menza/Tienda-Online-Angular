import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './productos/producto.model';
import { LoginServices } from './login';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  url = 'https://tienda-online-angular-3b971-default-rtdb.firebaseio.com/';

  constructor(private httpClient: HttpClient,
    private loginService: LoginServices
  ){}

  listarProductos(): Observable<{[llave:string]: Producto}>{
    const token = this.loginService.getIdToken();
    const url_listar = `${this.url}datos.json?auth=${token}`
    return this.httpClient.get<{[llave:string]: Producto}>(url_listar);
  }

  agregarProducto(producto: Producto): Observable<any>{
    const token = this.loginService.getIdToken();
    const url_agregar = `${this.url}datos.json?auth=${token}`
    //aqui se genera el valor de la llave de forma autpmatica
    return this.httpClient.post(url_agregar, producto);
  }

  modificarProducto(producto: Producto, llave: string): Observable<any>{
    const token = this.loginService.getIdToken();
    const url_modificada = `${this.url}datos/${llave}.json?auth=${token}`;
    return this.httpClient.put(url_modificada, producto);
  }

  eliminarProducto(llave: string): Observable<any>{
    const token = this.loginService.getIdToken();
    const url_eliminar = `${this.url}datos/${llave}.json?auth=${token}`;
    return this.httpClient.delete(url_eliminar);
  }
}
