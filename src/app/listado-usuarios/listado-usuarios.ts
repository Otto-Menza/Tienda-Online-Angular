import { Component } from '@angular/core';
import { Usuarios } from '../usuarios';

@Component({
  selector: 'app-listado-usuarios',
  imports: [],
  templateUrl: './listado-usuarios.html',
  styleUrl: './listado-usuarios.css'
})
export class ListadoUsuarios {
  usuarios: any[] = [];

  constructor(private usuariosService: Usuarios){}

  ngOnInit(){
    this.usuariosService.obtenerDatos().subscribe((data)=>{
      this.usuarios = data;
    });
  }
}
