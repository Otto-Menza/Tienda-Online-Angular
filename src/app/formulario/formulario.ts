import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Producto } from '../productos/producto.model';
import { ProductoService } from '../producto';

import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {
  productoId: number | null = null;
  descripcionInput: string = '';
  precioInput: number | null = null;
  constructor(private productoService: ProductoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(){
    //Verificar si debemos cargar un producto ya existente.
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      const producto = this.productoService.getProductoById(Number(id));
      if(producto){
        //si encontramos el producto lo cargamos en el formulario
        this.productoId = producto.id;
        this.descripcionInput = producto.descripcion;
        this.precioInput = producto.precio;
      }
    }
  }

  guardarProducto(evento: Event){
    evento.preventDefault();
    //Validar que sean valores correctos
    if(this.descripcionInput.trim() == '' || this.precioInput == null || this.precioInput <=0){
      console.log('Debe ingresar una descripción y un precio valido')
      return
    }
    const producto = new Producto(this.productoId, this.descripcionInput, this.precioInput);
    //nuevo producto usando el servidios
    this.productoService.guardarProducto(producto);

    //Limpiar los campos del formulario
    this.limpiarFormulario();
    //redirigir al inicio:
    this.router.navigate(['/']);
  }

  cancelar(){
    this.router.navigate(['/']);
  }
  limpiarFormulario(){
    this.productoId = null;
    this.descripcionInput = '';
    this.precioInput = null;
  }

  eliminarProducto(){
    if(this.productoId !== null){
      this.productoService.eliminarProducto(this.productoId);
      this.limpiarFormulario();
      this.router.navigate(['/']);
;    }
  }
}
