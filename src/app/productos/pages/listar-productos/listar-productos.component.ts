import { Component, OnInit } from '@angular/core';
import { Productos } from '../../interfaces/productos.interface';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-listar-page-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosPageComponent implements OnInit {

  public productos: Productos[] = [];

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.obtenerTodos();
  }

  eliminarProducto(id: string) {
    this.productosService.eliminarProducto(id).subscribe(resp => {
      this.obtenerTodos();
    }, error => {
      console.log(error)
    });
    
  }

  obtenerTodos() {
    console.log("Calling")
    this.productosService.obtenerTodos().subscribe(resp => {
      this.productos = resp;
    })
  }

}
