import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Productos } from '../../interfaces/productos.interface';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  public producto: Productos = {} as Productos;

  constructor(private productosService: ProductosService, private router: Router) { }

  ngOnInit(): void {
  }

  agregarProducto(){
    this.productosService.agregarProducto(this.producto).subscribe(resp => {
      this.router.navigate([`/productos/listar`]);
    }, err  => {
      console.log(err)
    })
  }

}
